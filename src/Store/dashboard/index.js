import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as DashboardApi from "../../Api/dashboard/index";

const initialState = {
  data: [],
  ui: {
    loading: false,
  },
};

const getDshboardData = createAsyncThunk(
  "dashboard/getDshboardData",
  async () => {
    const res = await DashboardApi.getDshboardData();
    return res.data;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDshboardData.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getDshboardData.fulfilled, (state, action) => {
        state.ui.loading = false;
        state.data = action.payload;
      })
      .addCase(getDshboardData.rejected, (state) => {
        state.ui.loading = false;
      });
  },
});

const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;

export { getDshboardData };
