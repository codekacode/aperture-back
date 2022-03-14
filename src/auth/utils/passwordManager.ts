import bcrypt from 'bcrypt';

export const encryptedPassword = async (input: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(input, salt);
  return hashPassword
}

export const validatePassword = async (
  password: string,
  encryptedPassword: string
) => {
  return await bcrypt.compare(password, encryptedPassword);
}
