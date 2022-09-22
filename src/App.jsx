import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TokenTable } from "./components/TokenTable.jsx";
import { handleSort } from "./store/slice/tableSlice.js";

import "./App.scss";

const App = () => {

    const items = useSelector(state => state.table.tableRows);
    const dispatch = useDispatch();

    const onSort = (sortedField) => {
        dispatch(handleSort(sortedField));
    }

    return(
        <div className="app-container">
            <TokenTable
                items={items}
                onSort={onSort} />
        </div>
    )
}

export default App;