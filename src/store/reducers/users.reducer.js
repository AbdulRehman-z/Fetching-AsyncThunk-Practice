import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/usersFetching";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    usersList: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersList = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const usersReducer = usersSlice.reducer;
