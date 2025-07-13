import { createSlice } from "@reduxjs/toolkit";

function safeParse(item) {
  try {
    const value = localStorage.getItem(item);
    return value && value !== "undefined" ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

const initialState = {
  userData: safeParse("userData"),
  isRegistered: safeParse("isRegistered") || false,
  isLoggedin: safeParse("isLoggedin") || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("is logged in set as true");
      state.isLoggedin = true;
      state.userData = action.payload.user;

      localStorage.setItem("isLoggedin", JSON.stringify(true));
      localStorage.setItem("userData", JSON.stringify(action.payload.user));
    },

    logout: (state) => {
       state.isRegistered = false;
      state.isLoggedin = false;
      state.userData = null;

      localStorage.removeItem("isLoggedin");
      localStorage.removeItem("userData");
      localStorage.removeItem("isRegistered")
    },

    signup: (state, action) => {

      state.isRegistered = true;
      state.userData = action.payload;
  //  console.log("state.userdata from slice",state.userData);
      localStorage.setItem("isRegistered", JSON.stringify(true));
     // localStorage.setItem("userData", JSON.stringify(state.userData));
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
