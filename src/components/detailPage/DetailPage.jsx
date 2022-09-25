import React from "react";
import { useSelector } from "react-redux";
import "./DetailPage.scss"

const DetailPage = () => {
  const detailPageData = useSelector(state => state.table.detailPage);
  console.log("detailPageData >>> ", detailPageData);
  return(
    <div className="detail-container" style={{backgroundColor: detailPageData.status}}>
      <h3>Product Detail Page</h3>
      <ul className="detail-list">
        <li>Project - {detailPageData.name}</li>
        <li>Token type - {detailPageData.type}</li>
        <li>Conditions - {detailPageData.conditions}</li>
        <li>Volume - {detailPageData.volume}</li>
        <li>ROI - {detailPageData.roi}</li>
        <li>Free float - {detailPageData.free}</li>
        <li>Insurance hedge - {detailPageData.hedge}</li>
      </ul>
    </div>
  )
}

export default DetailPage;