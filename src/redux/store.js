import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slice/calenderSlice";

export const store = configureStore({
  reducer: {
    itemsSlice: itemsSlice,
  },
});
