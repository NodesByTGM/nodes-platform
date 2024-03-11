import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: User | null;
}

interface User {
  id: number;
  username: string;
  // Add other user properties here
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
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
