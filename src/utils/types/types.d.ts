import { Dispatch, SetStateAction } from "react";

type GameT = {
  hash_id: string;
  state: number;
  template: number;
  title: string;
  finish_at: string;
  published_at: string | null;
  start_at: string;
  players: number;
};
interface CardProps {
  game: GameT;
  setSelectedGames: Dispatch<SetStateAction<number>>;
}
interface FiltersT {
  activeGames: string[];
  setActiveGames: Dispatch<SetStateAction<string[]>>;
  months: filterOptionT[];
  years: filterOptionT[];
  activeMonths: string[];
  setActiveMonths: Dispatch<SetStateAction<string[]>>;
  activeYears: string[];
  setActiveYears: Dispatch<SetStateAction<string[]>>;
}
interface FiltersProps {
  games: GameT[];
  filters: FiltersT;
  setFilters: Dispatch<SetStateAction<FiltersT>>;
  resetFilters: () => void;
}

type useFiltersT = {
  filters: FiltersT;
  setFilters: Dispatch<SetStateAction<FiltersT>>;
  resetFilters: () => void;
};

type FilterOptionT = {
  name: string;
  value: string;
};

interface FilterProps {
  label: string;
  filters: FiltersT;
  setFilters: Dispatch<SetStateAction<FiltersT>>;
}
