import { createAsyncThunk } from "@reduxjs/toolkit";

const deleteUser = createAsyncThunk("users/deleteUser", async (user) => {
  await fetch(`http://localhost:3000/users/${user.id}`, {
    method: "DELETE",
  });
  return user;
});

export { deleteUser };
