import tableData from "./tableData.js";

const getItemsArray = (field) => {
  const items = ["All"];
  for (let item of tableData) {
    if (!items.includes(item[field])) {
      items.push(item[field]);
    }
  }
  return items;
}

export const status = getItemsArray("status");
export const type = getItemsArray("type");
