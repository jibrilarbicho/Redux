const { createAssyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";
import baseURL from "../../../utils/baseURL";

const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  useProfile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

const registerUserAction = createAssyncThunk(
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
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
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
      },
    });
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
