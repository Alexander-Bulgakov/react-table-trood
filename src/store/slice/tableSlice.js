import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/tableData.js";
import { status, type } from "../../data/dataFilters.js";

const initialState = {
  tableRows: data,
  filters: {
    status,
    type,
  },
  sortField: "",
  sortOrder: true,
}

console.log("data from slice > ", data);

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    onStatusFilter(state, action) {
      if (action.payload !== "All"){
        state.tableRows = data.filter(row => row.status == action.payload);
      } else {
        state.tableRows = data;
      }
    },
    onTypeFilter(state, action) {
      if (action.payload !== "All"){
        state.tableRows = data.filter(row => row.type == action.payload);
      } else {
        state.tableRows = data;
      }
    },
    handleSort(state, action) {
      const sortingArray = [...data];
      state.sortField = action.payload;
      console.log("action.payload > ", action.payload);
      const sortValue = state.sortOrder ? 1 : -1;

      state.tableRows = sortingArray.sort((a,b) => {
        return sortValue * (a[action.payload] < b[action.payload] ? -1 : 1);
      })
      state.sortOrder = !state.sortOrder;
    },
  }
});

export default tableSlice.reducer;
export const { onStatusFilter, onTypeFilter, handleSort } = tableSlice.actions;