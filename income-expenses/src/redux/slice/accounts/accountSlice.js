import { EyeDropperIcon } from "@heroicons/react/24/outline";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
      const { data } = await axios.get(
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
