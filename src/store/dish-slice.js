import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishId: null,
  price: null,
  modalOpen: false,
};

const dishSlice = createSlice({
  name: "Dish Slice",
  initialState,
  reducers: {
    getDishId: (state, action) => {
      state.dishId = action.payload.dishId;
      state.price = action.payload.price;
      state.modalOpen = true;
    },

    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { getDishId, closeModal } = dishSlice.actions;
export default dishSlice.reducer;
