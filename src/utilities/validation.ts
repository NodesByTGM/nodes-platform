/* eslint-disable @typescript-eslint/no-explicit-any */
import { object, string, ref, bool, array, number } from "yup";

export const signupSchema = object({
  name: string().required("Name is a required field"),
  email: string().email().required("Email is a required field"),
  username: string().required("Username is a required field"),
  // dob: date().default(() => new Date()),
  day: string(),
  month: string(),
  year: string(),
  password: string().required("Password is a required field"),
  confirmPassword: string()
    .required("Confirm Password is a required field")
    .oneOf([ref("password")], "Passwords must match"),
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
export const profileSchema = object({
  firstName: string().required("first name is a required field"),
  lastName: string().required("Last name is a required field"),
  username: string().required("Username is a required field"),
  avatar: string().nullable(),
  location: string(),
  height: string(),
  age: string(),
  headline: string(),
  bio: string(),
  website: string(),
  linkedIn: string(),
  instagram: string(),
  twitter: string(),
  projectName: string(),
  description: string(),
  projectUrl: string(),
  spaces: bool(),
  comments: bool(),
  collaborators: array().of(
    object().shape({
      name: string(),
      role: string(),
      collabName: string(),
    })
  ),
});

export type profileValidationType = {
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  location: string;
  height: string;
  age: string;
  headline: string;
  bio: string;
  website: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
  projectName: string;
  description: string;
  projectUrl: string;
  spaces: boolean;
  comments: boolean;
  collaborators: [
    {
      name: string;
      role: string;
      collabName: string;
    }
  ];
};

export const projectSchema = object({
  name: string().required("Project name is a required field"),
  description: string(),
  projectURL: string(),
  thumbnail: object().shape({
    id: string(),
    url: string(),
  }),
  images: array().of(
    object().shape({
      id: string(),
      url: string(),
    })
  ),
  collaborators: array().of(
    object().shape({
      name: string(),
      role: string(),
      collabName: string(),
    })
  ),
});
export type projectValidationType = {
  name: string;
  description: string;
  projectURL: string;
  thumbnail: {
    id: string;
    url: string;
  };
  images:
    | [
        {
          id: string;
          url: string;
        }
      ]
    | any;
  collaborators: [
    {
      name: string;
      role: string;
      collabName: string;
    }
  ];
};

export const jobSchema = object({
  name: string(),
  description: string(),
  experience: string(),
  payRate: number(),
  workRate: string(),
  skills: array().of(string()),
  jobType: number(),
});
export type jobValidationType = {
  name: string,
  description: string,
  experience: string,
  payRate: number,
  workRate: string,
  skills: Array<string>,
  jobType: number,
};

export const resetPasswordSchema = object({
  password: string().required("Password is a required field"),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
});
export type ResetPasswordType = {
  password: string;
  confirmPassword: string;
};

export const loginSchema = object({
  email: string().email().required("Email is a required field"),
  password: string().required(),
});

export type LoginValidationType = {
  email: string;
  password: string;
};

export const emailSchema = object({
  email: string().email().required("Email is a required field"),
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
