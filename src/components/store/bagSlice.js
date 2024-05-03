import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bags",
  initialState: [],
  reducers: {
    addToBag: (store, action) => {
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
      console.log(store);
      return store.filter((item) => item !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
