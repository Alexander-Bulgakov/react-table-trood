import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { status, type } from "./data/dataFilters.js";
// import { onStatusFilter, onTypeFilter } from "./store/slice/tableSlice.js";
import { setFilter, handleFilter, changeBuyingList } from "./store/slice/tableSlice.js";
import { TokenTable } from "./components/TokenTable.jsx";
import { handleSort } from "./store/slice/tableSlice.js";
import "./App.scss";

// const filters ={
//     status,
//     type
// }



const App = () => {
    // const [statusState, setStatuState] = useState("");

    const items = useSelector(state => state.table.tableRows);
    const sortField = useSelector(state => state.table.sortField);
    const filterStatus = useSelector(state => state.table.filters.status);
    const filterType = useSelector(state => state.table.filters.type);
    const dispatch = useDispatch();

    const filters ={
        status: filterStatus,
        type: filterType
    }

    const onSort = (sortedField) => {
        dispatch(handleSort(sortedField));
    }

    const onFilter = ({ status, type }) => {
        dispatch(setFilter({status, type}));
        dispatch(handleFilter());
    }

    const onBuy = (id) => {
        dispatch(changeBuyingList(id));
        // setActive(current => !current);
        console.log("id >>> ", id);
    }

    return(
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
    )
}

export default App;