import { ApplicationError } from './../customErrors/ApplicationError';
import { logger } from './../../logger/appLogger';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export const bodyRequestValidator =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params
      })
    } catch (error: any) {
      logger.error(error)
      next(new ApplicationError(403, error.message, 'validation - bodyRequestValidator'))
    }
  }
