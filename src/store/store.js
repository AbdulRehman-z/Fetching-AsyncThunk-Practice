import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumsApi from "./api/albumsApi";
import { usersReducer } from "./reducers/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./api/albumsApi";
export * from "./thunks/deleteUser.js";
export * from "./thunks/addUser.js";
export * from "./thunks/usersFetching.js";
export { store };
