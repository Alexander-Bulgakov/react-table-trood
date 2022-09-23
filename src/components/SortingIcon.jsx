import React from "react";
import sortDown from "../icons/sort-down.svg";
import sortUp from "../icons/sort-up.svg";

export const SortingIcon = ({ sortOrder }) => {
    if (sortOrder) {
      return <img src={sortDown} alt="-" />
    } else {
      return <img src={sortUp} alt="+" />
    }
}