import { login, register } from "@/src/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";


// create async thunk le chai thunk action create graxa
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

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await register(data);

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
