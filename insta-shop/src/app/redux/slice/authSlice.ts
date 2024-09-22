// import { INewProduct } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface IUserProfile {
  id: string;
  fullname?: string;
  username?: string;
  email: string;
  phoneNumber?: string;
}

interface UserState {
  loading: boolean;
  user: IUserProfile | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  loading: false,
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        
      }>
    ) => {
      state.loading = false;
      state.user = {
        email: action.payload.email,
        id: uuidv4(),
       
      };
      state.isAuthenticated = true;
    },

    updateProfile: (
      state,
      action: PayloadAction<{
        email: string;
        fullname: string;
        username: string;
        phoneNumber: string;
      }>
    ) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
      }
    },
  },
});

export const { login, updateProfile } = userSlice.actions;
export default userSlice.reducer;
