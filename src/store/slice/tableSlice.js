import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/tableData.js";

const initialState = {
  tableRows: data,
}

console.log("data from slice > ", data);

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    filter(state) {
      state.tableRows = state.tableRows.filter(row => row.status === "green");
    } 
  }
});

export default tableSlice.reducer;
export const { filter } = tableSlice.actions;