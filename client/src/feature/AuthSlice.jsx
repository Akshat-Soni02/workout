import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, loading: false, user: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      isAuthenticated = false;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      isAuthenticated = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    resetLoading: (state) => {
      state.loading = false;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addMatcher(
  //       Api.endpoints.loginUser.matchFulfilled,
  //       (state, action) => {
  //         state.user = action.payload.user;
  //         state.token = action.payload.token;
  //       }
  //     );
  //   },
});

export const { logout, login } = AuthSlice.actions;
export default AuthSlice.reducer;
