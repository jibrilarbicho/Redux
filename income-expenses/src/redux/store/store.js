import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/users/usersSlice";
import accountsReducer from "../slice/accounts/accountSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
    accounts: accountsReducer,
  },
});
export default store;
