import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search slice",
  initialState: {
    searchList: [],
  },
  reducers: {
    setSearchList: (state, action) => {
      state.searchList = [...action.payload.mealsCategory];
    },
  },
});

export const { setSearchList } = searchSlice.actions;
export default searchSlice.reducer;
