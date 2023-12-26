const { createAssyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";
import baseURL from "../../../utils/baseURL";

const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  useProfile: {},
  useAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

const registerUser = createAssyncThunk(
  "user/regsiter",
  async (
    { fullname, email, password },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`{baseURL}/sers/register`, {
        fullname,
        email,
        password,
      });
    } catch (e) {}
  }
);
