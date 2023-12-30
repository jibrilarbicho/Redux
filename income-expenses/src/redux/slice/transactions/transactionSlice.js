import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  transactions: [],
  transaction: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
};
export const createTransactionAction = createAsyncThunk(
  "transaction/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const { name, account, transactionType, amount, category, notes } =
        payload;
      const config = {
        headers: {
          Authorization: `Bearer {token}`,
        },
      };
      const { data } = await axios.post(
        `https://income-expenses-tracker-web-dev.onrender.com/api/v1/transactions`,
        { name, account, transactionType, amount, category, notes },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.reasponse?.data);
    }
  }
);
