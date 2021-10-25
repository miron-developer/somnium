import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "routes/backet/basketSlice";
import homeSlice from "routes/home/homeSlice";

export default configureStore({
  reducer: {
    basket: basketSlice,
    home: homeSlice,
  },
});
