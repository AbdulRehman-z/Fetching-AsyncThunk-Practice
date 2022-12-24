import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunks/usersFetching.js";
export { store };
