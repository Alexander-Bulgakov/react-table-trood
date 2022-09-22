import tableData from "./tableData.js";

const getItemsArray = (field) => {
  const items = [""];
  for (let item of tableData) {
    if (!items.includes(item[field])) {
      items.push(item[field]);
    }
  }
  return items;
}

export const statusFilters = getItemsArray("status");
export const typeFilters = getItemsArray("type");
