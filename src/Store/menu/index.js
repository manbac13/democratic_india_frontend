import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: 'home',
  ui: {
    loading: false,
  },
};

const menuSlice = createSlice({
  name: "manu",
  initialState: initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

const { setActiveItem } = menuSlice.actions;
export default menuSlice.reducer
export { setActiveItem };
