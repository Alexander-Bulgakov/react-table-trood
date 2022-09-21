import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../store/slice/tableSlice.js";
import "./Table.scss";

export const Table = () => {
    // const state = useSelector(filter);
    const rows = useSelector(state => state.table.tableRows);
    const dispatch = useDispatch();


    // console.log(filter);
    console.log("state in table > ", rows);
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Token type</th>
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