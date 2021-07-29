import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  isClicked: null,
  foodsOpen: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getCategoryId: (state, action) => {
      state.category = action.payload.type;
      state.isClicked = !state.isClicked;
    },

    openFoods: (state) => {
      state.foodsOpen = true;
    },

    closeFoods: (state) => {
      state.foodsOpen = false;
    },
  },
});

export const { getCategoryId, openFoods, closeFoods } = itemsSlice.actions;

export default itemsSlice.reducer;
