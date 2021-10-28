import { useState } from "react";

interface TableDataRow {
  name: string;
  calories: number;
}
const data: TableDataRow[] = [
  {
    name: "Baked Potato",
    calories: 93,
  },
  {
    name: "French Fries",
    calories: 312,
  },
  {
    name: "Cheddar",
    calories: 403,
  },
  {
    name: "Brie",
    calories: 334,
  },
  {
    name: "Feta",
    calories: 264,
  },
  {
    name: "Ricotta",
    calories: 264,
  },
];

export function useListStory(initialRowsPerPage: number = 2) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [selected, setSelected] = useState([data[0].name, data[2].name]);

  const hasNextPage = (page + 1) * rowsPerPage < data.length;
  const hasPreviousPage = page > 0;

  const isRowSelected = (name: string) =>
    !!selected.find((selected) => selected === name);
  const toggleRow = (name: string) => {
    if (isRowSelected(name)) {
      setSelected(selected.filter((row) => row !== name));
    } else {
      setSelected([...selected, name]);
    }
  };
  const toggleAll = () => {
    if (data.length === selected.length) {
      setSelected([]);
    } else {
      setSelected(data.map((row) => row.name));
    }
  };

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  const pageData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return {
    data,
    pageData,
    page,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
    rowsPerPage,
    setRowsPerPage,
    selected,
    isRowSelected,
    toggleRow,
    toggleAll,
  };
}
