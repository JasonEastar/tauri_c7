import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    refreshToken: null,
    infos: [],
    sessionCookie: null,
  },
  reducers: {
    authLogin(state, action) {
      state.isAuthenticated = action.payload;
    },
    authLogout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
    getSessionCookie(state, action) {
      state.sessionCookie = action.payload;
    },
    setTokenJWT(state, action) {
      state.token = action.payload;
    },
    setRefreshTokenJWT(state, action) {
      state.refreshToken = action.payload;
    },
    setInfoUser(state, action) {
      state.infos = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  authLogout,
  authLogin,
  getSessionCookie,
  setTokenJWT,
  setInfoUser,
  setRefreshTokenJWT,
} = actions;
export default reducer;
