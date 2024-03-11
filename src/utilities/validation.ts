import { object, string, ref, bool } from "yup";

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


export const resetPasswordSchema = object({
 
  password: string().required(),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), null], "Passwords must match"),
 
});
export type ResetPasswordType = {
  password: string;
  confirmPassword: string;
};

export const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export type LoginValidationType = {
  email: string;
  password: string;
};

export const emailSchema = object({
  email: string().email().required(),
});

export type EmailValidationType = {
  email: string;
};

export type PersonalIndividualInformationType = {
  firstName: string;
  lastName: string;
  location: string;
  headline: string;
  bio: string;
  website: string;
  linkedIn: string;
  instagram: string;
  x: string;
  spaces: boolean;
  comments: boolean;
};

export const PersonalIndividualInformationSchema = {
  firstName: string(),
  lastName: string(),
  location: string(),
  headline: string(),
  bio: string(),
  website: string(),
  linkedIn: string(),
  instagram: string(),
  x: string(),
  spaces: bool(),
  comments: bool(),
};
