import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const validateUser = createAsyncThunk("userAuth", async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/auth/validate-token`,
    {
      withCredentials: true,
    }
  );
  
  
  return response.data.data.userID;
});

const authSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(validateUser.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload;
    });
  },
});

export default authSlice.reducer;
