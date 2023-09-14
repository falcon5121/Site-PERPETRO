import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverIp } from "../App";

export const fetchLogin = createAsyncThunk("loginAuth/fetchLogin", async () => {
  const res = await axios.get(`${serverIp}/login`, {
    withCredentials: true,
  });
  return res.data;
});

const initialState = {
  value: "",
  load: "",
};

const loginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state, action) => {
        state.load = "loading";
        console.log(state.load);
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.load = "complete";
        console.log(state.load);
        if (!action.payload.isAuth) {
          state.value = false;
        } else {
          state.value = action.payload;
        }
        // console.table(state.load, state.value);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.value = action.payload;
        state.load = "failed";
        console.log(action.error);
      });
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
