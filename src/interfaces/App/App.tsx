import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SelectFilters from "../../components/selectFilters/SelectFilters";
import Sidebar from "../../components/Sidebar/Sidebar";
import useFilters from "../../utils/hooks/useFilters";
import games from "../../test.json";
import Games from "../Games/GameWrapper/Games";
import "./App.scss";

function App(): JSX.Element {
  const { filters, setFilters, resetFilters } = useFilters();
  const [selectedGames, setSelectedGames] = useState(0);
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    if (selectedGames >= 1) {
      (document.getElementById("panel") as HTMLElement).style.bottom = "0px";
    } else {
      (document.getElementById("panel") as HTMLElement).style.bottom = "-100px";
    }
  }, [selectedGames]);

  useEffect(() => {
    setFilteredGames(
      games.filter(
        (game) =>
          filters.activeYears.includes(
            new Date(game.start_at).getFullYear().toString()
          ) ||
          filters.activeMonths.includes(
            new Date(game.finish_at).getMonth().toString()
          ) ||
          filters.activeYears.includes(
            new Date(game.finish_at).getFullYear().toString()
          ) ||
          filters.activeMonths.includes(
            new Date(game.start_at).getMonth().toString()
          )
      )
    );

    if (filters.activeMonths.length > 0 && filters.activeYears.length > 0) {
      setFilteredGames(
        games.filter(
          (game) =>
            (filters.activeYears.includes(
              new Date(game.start_at).getFullYear().toString()
            ) ||
              filters.activeYears.includes(
                new Date(game.finish_at).getFullYear().toString()
              )) &&
            (filters.activeMonths.includes(
              new Date(game.finish_at).getMonth().toString()
            ) ||
              filters.activeMonths.includes(
                new Date(game.start_at).getMonth().toString()
              ))
        )
      );
    }
  }, [filters.activeYears, filters.activeMonths]);

  $("#select-template").on("change", () => {
    setFilters({
      ...filters,
      activeGames: $("#select-template").val() as string[],
    });
  });
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <SelectFilters
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
      />
      <Games
        filters={filters}
        selectedGames={selectedGames}
        setSelectedGames={setSelectedGames}
        filteredGames={filteredGames}
      />
    </div>
  );
}

export default App;
