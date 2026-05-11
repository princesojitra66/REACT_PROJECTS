import { createSlice } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  changePassword,
} from "./authThunk";

const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");

    if (
      !user ||
      user === "undefined"
    ) {
      return null;
    }

    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: getUserFromLocalStorage(),
    token:
      localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        loginUser.fulfilled,
        (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )

      .addCase(
        loginUser.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      // REGISTER
      .addCase(
        registerUser.fulfilled,
        (state) => {
          state.loading = false;
        }
      )

      // CHANGE PASSWORD
      .addCase(
        changePassword.fulfilled,
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { logout } =
  authSlice.actions;

export default authSlice.reducer;