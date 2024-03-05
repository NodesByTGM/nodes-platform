import { object, string, number, date } from "yup";

export const signupSchema = object({
  name: string().required(),
  email: string().email(),
  username: string().required(),
  dob: date().default(() => new Date()),
  password: string().required(),
  confirmPassword: string().required(),
  otp: number(),
});

export type SignupValidationType = {
    name: string,
    email: string,
    username: string,
    dob: number,
    password: string,
    confirmPassword: string,
    otp: string,
  };
