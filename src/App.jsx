import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { status, type } from "./data/dataFilters.js";
// import { onStatusFilter, onTypeFilter } from "./store/slice/tableSlice.js";

import { TokenTable } from "./components/TokenTable.jsx";
import { handleSort } from "./store/slice/tableSlice.js";
import "./App.scss";

const filters ={
    status,
    type
}

const columns = [
    {label: "Project", dataField: "name"},
    {label: "Token type", dataField: "type"},
    {label: "Conditions", dataField: "conditions"},
    {label: "Volume", dataField: "volume"},
    {label: "roi", dataField: "roi"},
    {label: "Free float", dataField: "free"},
    {label: "Insurance hedge", dataField: "hedge"},
];

const App = () => {
    // const [statusState, setStatuState] = useState("");

    const items = useSelector(state => state.table.tableRows);
    const sortField = useSelector(state => state.table.sortField);
    const dispatch = useDispatch();

    const onSort = (sortedField) => {
        dispatch(handleSort(sortedField));
    }

    return(
        <div className="app-container">
            <TokenTable
                items={items}
                onSort={onSort}
                columns={columns}
                sortField={sortField}
                filters={filters}
                 />
        </div>
    )
}

export default App;