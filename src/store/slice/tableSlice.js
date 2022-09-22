import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/tableData.js";
import { statusFilters, typeFilters } from "../../data/dataFilters.js";

const initialState = {
  tableRows: data,
  filters: {
    statusFilters,
    typeFilters,
  },
}

console.log("data from slice > ", data);

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    onStatusFilter(state, action) {
      // console.log("action > ", action.payload);
      if (action.payload !== ""){
        state.tableRows = data.filter(row => row.status == action.payload);
      } else {
        state.tableRows = data;
      }
    },
    onTypeFilter(state, action) {
      // console.log("action > ", action.payload);
      if (action.payload !== ""){
        state.tableRows = data.filter(row => row.type == action.payload);
      } else {
        state.tableRows = data;
      }
    },
  }
});

export default tableSlice.reducer;
export const { onStatusFilter, onTypeFilter } = tableSlice.actions;