import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../services/auth";

// const user: (string | null) = JSON.parse(localStorage.getItem("user"));
const user = null;

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk<
  // Return type of the payload creator
  null,
  // First argument to the payload creator
  RegisterData
>(
  'auth/register',
  async ({ username, email, password }, thunkAPI) => {
    console.log('auth.slice - register');
    try {
      const data = await AuthService.register(username, email, password);
      console.log('data:', data);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return null;
    } catch (error) {
      console.warn(error);
      let errorMessage: string = 'There was a problem';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      // thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export interface AuthState {
  isLoggedIn: boolean;
  user: string | null;
}
const initialState: AuthState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        // state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
  // extraReducers: {
    // [login.fulfilled]: (state, action) => {
    //   state.isLoggedIn = true;
    //   state.user = action.payload.user;
    // },
    // [login.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  // },
});

const { reducer } = authSlice;
export default reducer;
