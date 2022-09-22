import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onStatusFilter, onTypeFilter } from "../store/slice/tableSlice.js";
import "./TokenTable.scss";

export const TokenTable = ({ items, onSort }) => {
    const [statustate, setstatustate] = useState("");
    const [typetate, settypetate] = useState("");
    const filters = useSelector(state => state.table.filters);
    const dispatch = useDispatch();

    const handleStatusFilter = (e) => {
        setstatustate(e.target.value);
        dispatch(onStatusFilter(e.target.value));
    }
    const handleTypeFilter = (e) => {
        console.log(e.target.value);
        settypetate(e.target.value);
        dispatch(onTypeFilter(e.target.value));
    }

    console.log("statustate > ", statustate);

    console.log("state in table > ", items);
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <label htmlFor="select-status">Status filter </label>
                            <select 
                                name="select-status" 
                                onChange={handleStatusFilter}
                                value={statustate}>
                                {filters.status.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select></td>
                        <td>
                            <label htmlFor="select-type">Type filter </label>
                            <select name="select-type" 
                                value={typetate}
                                onChange={handleTypeFilter}>
                                {filters.type.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select></td>
                    </tr>
                    <tr>
                        <th onClick={() => onSort("name")}>Project</th>
                        <th onClick={() => onSort("type")}>Token type</th>
                        <th onClick={() => onSort("conditions")}>Conditions</th>
                        <th onClick={() => onSort("volume")}>Volume</th>
                        <th onClick={() => onSort("roi")}>roi</th>
                        <th onClick={() => onSort("free")}>Free float</th>
                        <th onClick={() => onSort("hedge")}>Insurance hedge</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {
                        items.map((row) => (
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.type}</td>
                                <td>{row.conditions}</td>
                                <td>{"\u0024"} {row.volume}</td>
                                <td>{row.roi} {"\u0025"}</td>
                                <td>{row.free}</td>
                                <td>{row.hedge} {"\u0025"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}