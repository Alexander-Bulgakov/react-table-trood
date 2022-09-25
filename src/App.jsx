import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  handleFilter,
  changeBuyingList,
} from "./store/slice/tableSlice.js";
import { TokenTable } from "./components/TokenTable.jsx";
import { handleSort } from "./store/slice/tableSlice.js";
import "./App.scss";

const App = () => {
  const items = useSelector((state) => state.table.tableRows);
  const sortField = useSelector((state) => state.table.sortField);
  const filterStatus = useSelector((state) => state.table.filters.status);
  const filterType = useSelector((state) => state.table.filters.type);
  const dispatch = useDispatch();

  const filters = {
    status: filterStatus,
    type: filterType,
  };

  const onSort = (sortedField) => {
    dispatch(handleSort(sortedField));
  };

  const onFilter = ({ status, type }) => {
    dispatch(setFilter({ status, type }));
    dispatch(handleFilter());
  };

  const onBuy = (id) => {
    dispatch(changeBuyingList(id));
  };

  return (
    <div className="app-container">
      <TokenTable
        items={items}
        onSort={onSort}
        sortField={sortField}
        filters={filters}
        onFilter={onFilter}
        onBuy={onBuy}
      />
    </div>
  );
};

export default App;
