/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { object, string, ref, bool, array, number } from "yup";

export const signupSchema = object({
  name: string().required("Name is a required field"),
  email: string().email().required("Email is a required field"),
  username: string()
    .required("Username is a required field")
    .trim()
    .matches(/^\S*$/, "Username must not contain spaces"),
  dob: string().required("DOB field is required"),
  password: string()
    .required("Password is a required field")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "The password requires an uppercase, lowercase, number and special character"
    )
    .test(
      "len",
      "Password should have a minimum of 8 characters",
      (val) => String(val)?.length >= 8
    ),
  confirmPassword: string()
    .required("Confirm Password is a required field")
    .oneOf([ref("password")], "Passwords must match"),
  otp: string(),
});

export type SignupValidationType = {
  name: string;
  email: string;
  username: string;
  dob: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

export const businessProfileSchema = object({
  name: string().required("Name is a required field"),
  logo: object()
    .shape({
      id: string(),
      url: string(),
    })
    .nullable(),
  yoe: string(),
  location: string(),
  linkedIn: string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .nullable(),
  instagram: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  twitter: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  headline: string(),
  bio: string(),
});

export type BusinessProfileValidationType = {
  name: string;
  logo: {
    id: string;
    url: string;
  };
  yoe: string;
  location: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
  headline: string;
  bio: string;
};

export const adminSignupSchema = object({
  firstName: string().required("First name is a required field"),
  lastName: string().required("Last name is a required field"),
  email: string().email().required("Email is a required field"),

  password: string().required("Password is a required field").matches(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    "The password requires an uppercase, lowercase, number and special character"
  )
  .test(
    "len",
    "Password should have a minimum of 8 characters",
    (val) => String(val)?.length >= 8
  ),
  confirmPassword: string()
    .required("Confirm Password is a required field")
    .oneOf([ref("password")], "Passwords must match"),
  otp: string(),
});

export type AdminSignupValidationType = {
  firstName: string;
  lastName: string;
  email: string;

  password: string;
  confirmPassword: string;
  otp: string;
};
export const profileSchema = object({
  firstName: string().required("first name is a required field"),
  lastName: string().required("Last name is a required field"),
  username: string()
    .required("Username is a required field")
    .trim()
    .matches(/^\S*$/, "Username must not contain spaces"),
  avatar: object()
    .shape({
      id: string(),
      url: string(),
    })
    .nullable(),
  location: string(),
  height: number()
    // .test("num", "Height must be a number", (val) => typeof val === "number")
    .nullable(),
  age: string()
    // .min(18, "Minimum age is 18")
    // .test(
    //   "num",
    //   "Age must be a number",
    //   (val) => {
    //     if(String(val).length > 0){
    //       return typeof val === "number"
    //     } else {
    //       return true
    //     }
    //   }
    // )
    .nullable(),
  headline: string(),
  bio: string(),
  website: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),

  // .url('Invalid url'),
  linkedIn: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  instagram: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  twitter: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
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
  avatar: {
    id: string;
    url: string;
  };
  location: string;
  height: number;
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
  name: string()
    .required("Project name is a required field")
    .test(
      "len",
      "Project name should have a maximum of 50 characters",
      (val) => String(val)?.length <= 50
    ),
  description: string().test(
    "len",
    "Project details should have a maximum of 300 characters",
    (val) => String(val)?.length <= 300
  ),
  projectURL: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
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
      name: string().test(
        "len",
        "Collaborator's name should have a maximum of 30 characters",
        (val) => String(val)?.length <= 30
      ),
      role: string(),
      collabName: string().test(
        "len",
        "Collaborator's name should have a maximum of 30 characters",
        (val) => String(val)?.length <= 30
      ),
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

export const spaceSchema = object({
  name: string().required("Project name is a required field"),
  category: string(),
  description: string(),

  rules: array().of(
    object().shape({
      title: string(),
      description: string(),
      ruleTitle: string(),
    })
  ),
});

export type spaceValidationType = {
  name: string;
  category: string;
  description: string;
  rules: [
    {
      title: string;
      description: string;
      ruleTitle: string;
    }
  ];
};

export const paymentSchema = object({
  name: string().required("Name is a required field"),
  cardNumber: number()
    .required("Card number is a required field")
    .nullable()
    .test(
      "len",
      "Must be exactly 12 characters",
      (val) => String(val)?.length === 12
    ),
  expDate: number()
    .required("Expiration date is a required field")
    .nullable()
    .test(
      "len",
      "Must be exactly 12 characters",
      (val) => String(val)?.length === 12
    ),
  cvc: number()
    .required("CVC is a required field")
    .nullable()
    .test(
      "len",
      "Must be exactly 12 characters",
      (val) => String(val)?.length === 12
    ),
});

export type paymentValidationType = {
  name: string;
  cardNumber: number | string;
  expDate: number | string;
  cvc: number | string;
};

export const jobSchema = object({
  name: string(),
  description: string(),
  hoursPerWeek: number(),
  location: string(),
  experience: string(),
  payRate: number(),
  workRate: string(),
  skills: array().of(string()),
  jobType: number(),
});
export type jobValidationType = {
  name: string;
  description: string;
  hoursPerWeek: number;
  location: string;
  experience: string;
  payRate: number;
  workRate: string;
  skills: Array<string>;
  jobType: number;
};

export const eventSchema = object({
  name: string(),
  description: string(),
  location: string(),
  dateTime: string(),
  paymentType: string(),
  thumbnail: object().shape({
    id: string(),
    url: string(),
  }),
});
export type eventValidationType = {
  name: string;
  description: string;
  location: string;
  dateTime: string;
  paymentType: string;
  thumbnail: {
    id: string;
    url: string;
  };
};

export const postSchema = object({
  body: string(),
  attachments: array().of(
    object().shape({
      id: string(),
      url: string(),
    })
  ),
  hashtags: array().of(string()),
});

export type postValidationType = {
  body: string;
  attachments:
    | [
        {
          id: string;
          url: string;
        }
      ]
    | any;
  hashtags: [string];
};

export const resetPasswordSchema = object({
  password: string().required("Password is a required field").matches(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    "The password requires an uppercase, lowercase, number and special character"
  )
  .test(
    "len",
    "Password should have a minimum of 8 characters",
    (val) => String(val)?.length >= 8
  ),
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
  website: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  linkedIn: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  instagram: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  x: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
  spaces: bool(),
  comments: bool(),
};

export const accountSettingsSchema = object({
  name: string().required("Name is a required field"),
  username: string()
    .required("Username is a required field")
    .trim()
    .matches(/^\S*$/, "Username must not contain spaces"),
  email: string().email().required("Email is a required field"),
  day: string().required(),
  month: string().required(),
  year: string().required(),
  visibility: string().required(),
});

export type AccountSettingsValidationType = {
  name: string;
  username: string;
  email: string;
  day: string;
  month: string;
  year: string;
  visibility: string;
};

export const verifyBusinessSchema = object({
  logo: object()
    .shape({
      id: string(),
      url: string(),
    })
    .nullable(),
  name: string().required("Name is a required field"),
  location: string().nullable(),
  yoe: string(),
  linkedIn: string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .nullable(),
  CAC: object()
    .shape({
      id: string(),
      url: string(),
    })
    .nullable(),
});

export type VerifyBusinessValidationType = {
  logo: {
    id: string;
    url: string;
  };
  name: string;
  location: string;
  yoe: string;
  linkedIn: string;
  CAC: {
    id: string;
    url: string;
  };
};
