import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  btnCreateOperationStyle,
  pageTitle,
  textPanelStyle,
} from "../../utils/style/style";
import { GameT } from "../../utils/types/types";
import Filters from "../Filters/Filters";
import games from "../../test.json";
import useFilters from "../../utils/hooks/useFilters";
import Card from "../../components/card/Card";
import "./Games.scss";

function Games(): JSX.Element {
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
    <>
      <div className="selection">
        <Filters
          filters={filters}
          resetFilters={resetFilters}
          setFilters={setFilters}
          games={games}
        />
        <Button
          id="btn-create-operation"
          type="button"
          role="button"
          variant="success"
          style={btnCreateOperationStyle}
          size="lg"
        >
          <i className="fa-solid fa-plus" /> Créer une nouvelle opération
        </Button>
      </div>
      <p style={pageTitle}>OPERATIONS FEVRIER 2018</p>
      <div className="gameWrapper">
        {(filters.activeMonths.length > 0 || filters.activeYears.length > 0
          ? filteredGames
          : games
        )
          .filter((game) =>
            filters.activeGames.length > 0
              ? filters.activeGames.includes(game.template.toString())
              : game
          )
          .map((game: GameT) => (
            <Card game={game} setSelectedGames={setSelectedGames} />
          ))}

        <div id="panel" className="panel">
          <span style={textPanelStyle}>
            <p style={{ width: "15px" }}>{selectedGames}</p>
            {selectedGames > 1
              ? "opérations sélectionnées"
              : "opération sélectionnée"}
          </span>
          <Button size="sm" variant="success">
            <i className="fa-solid fa-file-export" />
            Exporter l&apos;ensemble des statiques
          </Button>
          <Button size="sm" variant="danger">
            <i className="fa-regular fa-eye" />
            Masquer
          </Button>
          <Button size="sm" variant="warning">
            <i className="fa-solid fa-layer-group" />
            Grouper
          </Button>
          <Button size="sm" variant="secondary">
            <i className="fa-solid fa-xmark" />
            Dégrouper
          </Button>
        </div>
      </div>
    </>
  );
}

export default Games;
