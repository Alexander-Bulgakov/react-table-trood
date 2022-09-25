import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { status, type } from "../data/dataFilters.js";
// import { changeBuyingList } from "../store/slice/tableSlice.js";
import { SortingIcon } from "./SortingIcon.jsx";
import "./TokenTable.scss";

const columns = [
    {label: "Project", dataField: "name"},
    {label: "Token type", dataField: "type"},
    {label: "Conditions", dataField: "conditions"},
    {label: "Volume", dataField: "volume"},
    {label: "roi", dataField: "roi"},
    {label: "Free float", dataField: "free"},
    {label: "Insurance hedge", dataField: "hedge"},
];

export const TokenTable = ({ items, onSort, sortField, filters, onFilter, onBuy }) => {
    const sortOrder = useSelector(state => state.table.sortOrder);
    const buyingList = useSelector(state => state.table.buyingList);
    // const [isActive, setActive] = useState(false);
    // const dispatch = useDispatch();

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <label htmlFor="select-status">Status filter </label>
                            <select 
                                name="select-status" 
                                onChange={(e) => onFilter({status: e.target.value, type: filters.type})}
                                value={filters.status}>
                                {status.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select></td>
                        <td>
                            <label htmlFor="select-type">Type filter </label>
                            <select name="select-type" 
                                onChange={(e) => onFilter({status: filters.status, type: e.target.value})}
                                value={filters.type}
                                >
                                {type.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select></td>
                    </tr>
                    <tr>
                        {columns.map(({ dataField, label }) => {
                            return(
                                <th 
                                    onClick={() => onSort(dataField)}
                                    key={dataField}
                                    >
                                        {
                                            dataField === sortField ? <SortingIcon sortOrder={sortOrder} /> : ""
                                        } 
                                    {label}</th>
                            )
                        })}
                        {/* <th onClick={() => onSort("name")}>Project</th>
                        <th onClick={() => onSort("type")}>Token type</th>
                        <th onClick={() => onSort("conditions")}>Conditions</th>
                        <th onClick={() => onSort("volume")}>Volume</th>
                        <th onClick={() => onSort("roi")}>roi</th>
                        <th onClick={() => onSort("free")}>Free float</th>
                        <th onClick={() => onSort("hedge")}>Insurance hedge</th> */}
                    </tr>
                </thead>
                <tbody className="table__body">
                    {
                        items.map((row) => (
                            <tr key={row.id} className={"table-row" + "_" + row.status}>
                                <td><span className="circle" style={{backgroundColor: row.status}}></span>{row.name}</td>
                                <td>{row.type}</td>
                                <td>{row.conditions}</td>
                                <td>{"\u0024"} {row.volume}</td>
                                <td>{row.roi} {"\u0025"}</td>
                                <td>{row.free}</td>
                                <td>{row.hedge} {"\u0025"}</td>
                                <td>
                                    <button 
                                        className={ buyingList.includes(row.id) ? "buy-button active" : "buy-button"} 
                                        onClick={() => onBuy(row.id)}
                                        >Buy</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}