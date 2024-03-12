/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any | User | null | any;
}

interface User {
  name: string;
  username: string;
  email: string;
  dob: any;
  verified: boolean;
  skills: any;
  location: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
  step: number;
  onboardingPurpose: number;
  otherPurpose: any;
  headline: any;
  bio: any;
  website: string;
  spaces: boolean;
  comments: boolean;
  type: number;
  createdAt: any;
  updatedAt: any;
  id: string;
  accessToken: string;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logoutUser: () => initialState,
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
