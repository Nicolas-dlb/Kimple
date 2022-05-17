import React from "react";
import { Button } from "react-bootstrap";
import { textPanelStyle } from "../../../utils/style/style";
import { GamesProps, GameT } from "../../../utils/types/types";
import "./Games.scss";
import games from "../../../test.json";
import Card from "../../../components/card/Card";

function Games({
  filters,
  selectedGames,
  setSelectedGames,
  filteredGames,
}: GamesProps): JSX.Element {
  return (
    <div className="games">
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
  );
}

export default Games;
