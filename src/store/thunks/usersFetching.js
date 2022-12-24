import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  return data;
});

export { fetchUsers };
