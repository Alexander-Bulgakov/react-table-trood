import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/tableData.js";

const initialState = {
  tableRows: data,
  filters: {
    status: "All",
    type: "All"
  },
  sortField: "",
  sortOrder: true,
  buyingList: [],
  detailPage: {}
}

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setDetailPage(state, action) {
      state.detailPage = action.payload;
    },
    changeBuyingList(state, action){
      const rowIndex = state.buyingList.indexOf(action.payload);

      if ( rowIndex >= 0 ) {
        state.buyingList.splice(rowIndex, 1);
      } else {
        state.buyingList.push(action.payload);
      }

    },
    setFilter(state, action) {
      state.filters.status = action.payload.status;
      state.filters.type = action.payload.type;
    },
    handleFilter(state) {
      let filteringData = [...data];

      if (state.filters.status !== "All"){
        filteringData = filteringData.filter(row => row.status === state.filters.status);
      }

      if (state.filters.type !== "All"){
        state.tableRows = filteringData.filter(row => row.type === state.filters.type);
      } else {
        state.tableRows = filteringData;
      }

    },
    handleSort(state, action) {
      const sortingArray = [...data];
      state.sortField = action.payload;
      const sortValue = state.sortOrder ? 1 : -1;

      state.tableRows = sortingArray.sort((a,b) => {
        return sortValue * (a[action.payload] < b[action.payload] ? -1 : 1);
      })
      
      state.sortOrder = !state.sortOrder;
    },
  }
});

export default tableSlice.reducer;
export const { handleSort, setFilter, handleFilter, changeBuyingList, setDetailPage } = tableSlice.actions;