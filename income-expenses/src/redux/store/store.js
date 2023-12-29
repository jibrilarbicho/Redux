import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/users/usersSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export default store;
