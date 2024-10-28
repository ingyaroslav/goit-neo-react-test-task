import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    handleFavourites(state, { payload }) {
      if (state.items.includes(payload)) {
        state.items = state.items.filter((item) => item !== payload);
      } else {
        state.items.push(payload);
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { handleFavourites } = favoritesSlice.actions;