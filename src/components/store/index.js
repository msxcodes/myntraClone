import { configureStore } from "@reduxjs/toolkit";
import itmesSlice from "./itemsSlice";
import fetchingItemsSlice from "./fetchingItems";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itmesSlice.reducer,
    fetching: fetchingItemsSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
