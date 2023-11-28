import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import usersReducer from "./features/users/usersSclice";

const store = configureStore({
  reducer: { counter: counterReducer, users : usersReducer},
});

export default store;
