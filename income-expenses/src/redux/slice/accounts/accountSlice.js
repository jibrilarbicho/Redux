import { EyeDropperIcon } from "@heroicons/react/24/outline";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  account: null,
  accounts: [],
  error: null,
  loading: false,
  success: false,
  isUpdated: false,
};
export const createAccountAction = createAsyncThunk(
  "account/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const { name, initialBalance, accountType, notes } = payload;
      const config = {
        headers: {
          Authorization: `Bearer {token}`,
        },
      };
      const { data } = await axios.post(
        `https://income-expenses-tracker-web-dev.onrender.com/api/v1/accounts`,
        { name, initialBalance, accountType, notes },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.reasponse?.data);
    }
  }
);
const AccountSlice = createSlice({
  name: "accounts",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(createAccountAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload;
    });
    builder.addCase(createAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });
  },
});
const accountsReducer = AccountSlice.reducer;
export default accountsReducer;
