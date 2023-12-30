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
        { name, account: payload.id, transactionType, amount, category, notes },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.reasponse?.data);
    }
  }
);

const TransactionSlice = createSlice({
  name: "transactions",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(createTransactionAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createTransactionAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isAdded = true;
      state.transaction = action.payload;
    });
    builder.addCase(createTransactionAction.rejected, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.transaction = null;
      state.error = action.payload;
    });
  },
});
const transactionReducer = TransactionSlice.reducer;
export default transactionReducer;
