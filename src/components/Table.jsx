import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../store/slice/tableSlice.js";
import "./Table.scss";

export const Table = () => {
    const [filterState, setFilterState] = useState("");
    const rows = useSelector(state => state.table.tableRows);
    const filters = useSelector(state => state.table.filters);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFilterState(e.target.value);
        dispatch(filter(e.target.value));
    }

    console.log("filterState > ", filterState);

    console.log("state in table > ", rows);
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <select 
                                name="select-status" 
                                onChange={handleChange}
                                value={filterState}>
                                {filters.statusFilters.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select>
                            Project</th>
                        <th>
                            <select name="select-type" id="">
                                {filters.typeFilters.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select>
                            Token type</th>
                        <th>Conditions</th>
                        <th>Volume</th>
                        <th>roi</th>
                        <th>Free float</th>
                        <th>Insurance hedge</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {
                        rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.type}</td>
                                <td>{row.conditions}</td>
                                <td>{row.volume}</td>
                                <td>{row.roi}</td>
                                <td>{row.free}</td>
                                <td>{row.hedge}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={() => dispatch(filter())}>filter this!</button>
        </div>
    )
}