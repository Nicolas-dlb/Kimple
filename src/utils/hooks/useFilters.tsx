import { useState } from "react";
import { FiltersT, useFiltersT } from "../types/types";

export default function useFilters(): useFiltersT {
  const [activeMonths, setActiveMonths] = useState<string[]>([]);
  const [activeYears, setActiveYears] = useState<string[]>([]);
  const [activeGames, setActiveGames] = useState<string[]>([]);

  const months = [
    { name: "janv.", value: "0" },
    { name: "févr.", value: "1" },
    { name: "mars", value: "2" },
    { name: "avr.", value: "3" },
    { name: "mai", value: "4" },
    { name: "juin", value: "5" },
    { name: "juill.", value: "6" },
    { name: "août.", value: "7" },
    { name: "sept.", value: "8" },
    { name: "oct.", value: "9" },
    { name: "nov.", value: "10" },
    { name: "déc.", value: "11" },
  ];
  const years = [
    { name: "2017", value: "2017" },
    { name: "2018", value: "2018" },
    { name: "2019", value: "2019" },
    { name: "2020", value: "2020" },
  ];

  const [filters, setFilters] = useState<FiltersT>({
    activeGames,
    setActiveGames,
    months,
    years,
    activeMonths,
    setActiveMonths,
    activeYears,
    setActiveYears,
  });

  function resetFilters() {
    setFilters({
      ...filters,
      activeMonths: [],
      activeYears: [],
    });
  }

  return { filters, setFilters, resetFilters };
}
