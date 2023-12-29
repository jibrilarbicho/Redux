import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  useProfile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
};

export const registerUserAction = createAsyncThunk(
  "user/regsiter",
  async (
    { fullname, email, password },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      console.log(fullname, email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        `https://income-expenses-tracker-web-dev.onrender.com/api/v1/users/register`,
        {
          fullname,
          email,
          password,
        },
        config
      );
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
export const loginUserAction = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
    try {
      console.log(email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        `https://income-expenses-tracker-web-dev.onrender.com/api/v1/users/login`,
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    //register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
  },
});

const userReducer = usersSlice.reducer;
export default userReducer;
