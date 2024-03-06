import { object, string, number, ref } from "yup";

export const signupSchema = object({
  name: string().required(),
  email: string().email().required(),
  username: string().required(),
  // dob: date().default(() => new Date()),
  day: string(),
  month: string(),
  year: string(),
  password: string().required(),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), null], "Passwords must match"),
  otp: string(),
});

export type SignupValidationType = {
  name: string;
  email: string;
  username: string;
  // dob: number,
  day: string;
  month: string;
  year: string;

  password: string;
  confirmPassword: string;
  otp: string;
};

export const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
 
});

export type LoginValidationType = {

  email: string;
  password: string;

};