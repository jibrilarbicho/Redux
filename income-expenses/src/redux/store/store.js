import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/users/usersSlice";
import accountsReducer from "../slice/accounts/accountSlice";
import transactioReducer from "../slice/transactions/transactionSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
    accounts: accountsReducer,
    transactions: transactioReducer,
  },
});
export default store;
