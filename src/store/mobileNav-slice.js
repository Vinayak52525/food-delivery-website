import { createSlice } from "@reduxjs/toolkit";

const mobileNavSlice = createSlice({
  name: "mobile nav",
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleMobileNav: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleMobileNav } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;
