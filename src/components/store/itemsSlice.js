import { createSlice } from "@reduxjs/toolkit";

const itmesSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    initialItems: (store, action) => {
      return action.payload;
    },
  },
});

export const itemsAction = itmesSlice.actions;

export default itmesSlice;
