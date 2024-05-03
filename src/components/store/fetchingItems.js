import { createSlice } from "@reduxjs/toolkit";

const fetchingItemsSlice = createSlice({
  name: "fetching",
  initialState: {
    isFetching: false,
    fetchingDone: false,
  },
  reducers: {
    fetchingDone: (state) => {
      return (state.fetchingDone = true);
    },
    isFetchingStarted: (state) => {
      return (state.isFetching = true);
    },
    isFetchingFinished: (state) => {
      return (state.isFetching = false);
    },
  },
});

export const fetchingItemsAction = fetchingItemsSlice.actions;

export default fetchingItemsSlice;
