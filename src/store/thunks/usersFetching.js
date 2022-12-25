import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  await delay(1000);
  return data;
});

const delay = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export { fetchUsers };
