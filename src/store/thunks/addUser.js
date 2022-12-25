import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/addUser", async () => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: faker.name.firstName(),
    }),
  });
  const data = await response.json();
  return data;
});

export { addUser };
