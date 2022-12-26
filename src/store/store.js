import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunks/deleteUser.js";
export * from "./thunks/addUser.js";
export * from "./thunks/usersFetching.js";
export { store };
