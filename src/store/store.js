import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tableSlice from "./slice/tableSlice";

const rootReducer = combineReducers({
  table: tableSlice,
});

export const store = configureStore({
    reducer: rootReducer,
})