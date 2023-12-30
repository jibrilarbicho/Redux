import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/users/usersSlice";
import accountsReducer from "../slice/accounts/accountSlice";
import transactionReducer from "../slice/transactions/transactionSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
    accounts: accountsReducer,
    transactions: transactionReducer,
  },
});
export default store;
