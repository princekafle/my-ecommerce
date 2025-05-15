import { login } from "@/src/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

const myAction = async (data) => {
  await login(data);
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 1. pending
// 2. fulfilled
// 3. rejected
