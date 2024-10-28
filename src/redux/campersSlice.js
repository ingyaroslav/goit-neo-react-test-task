import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    item: {
      id: null,
      reviews: [],
      features: [],
      specifications: {},
    },
    previousPage: 0,
    currentPage: 1,
    maxPages: 0,
    loadMore: true,
    loading: false,
    error: null,  
  },
  reducers: {

    setPage(state) {      
      state.previousPage = state.currentPage;
      state.currentPage += 1;
      state.loadMore = state.currentPage < state.maxPages;
    },

    reset(state) {
      state.items = [];
      state.maxPages = 0;
      state.loadMore = true;
      state.error = null;
      state.currentPage = 1;
      state.previousPage = 0;   
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.maxPages = Math.ceil(payload.total / 4);
        state.loadMore = state.currentPage < state.maxPages;       
      })

      .addCase(fetchCamper.fulfilled, (state, { payload }) => {
        state.item.id = payload;
        state.item.reviews = payload.reviews;
        state.item.features = Object.keys(payload).filter(
          (key) => payload[key] === true
        );
        state.item.specifications = {
          form: payload.form.charAt(0).toUpperCase() + payload.form.slice(1),
          length: payload.length.replace("m", " m"),
          width: payload.width.replace("m", " m"),
          height: payload.height.replace("m", " m"),
          tank: payload.tank.replace("l", " l"),
          consumption: payload.consumption,
        };
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )

      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
          state.loading = false;
        }
      );
  },
});

export default campersSlice.reducer;
export const { setPage, reset } = campersSlice.actions;