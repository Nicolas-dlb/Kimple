import React from "react";
import "./Filters.scss";
import { Button } from "react-bootstrap";
import Filter from "../../components/Filter/Filter";
import { FiltersProps } from "../../utils/types/types";
import games from "../../test.json";
import { btnDeleteFiltersStyle } from "../../utils/style/style";
import { removeDuplicates } from "../../utils/helpers/helpers";

function Filters({
  filters,
  setFilters,
  resetFilters,
}: FiltersProps): JSX.Element {
  const gameTypes: number[] = games.map((game) => game.template);

  return (
    <div className="filters">
      <div className="date-filters">
        <Filter label="Mois" filters={filters} setFilters={setFilters} />
        <Filter label="Année" filters={filters} setFilters={setFilters} />
        <div className="btn-reset-filters">
          <Button
            id="btn-delete-filters"
            type="button"
            role="button"
            variant="dark"
            onClick={() => resetFilters()}
            style={btnDeleteFiltersStyle}
            size="sm"
          >
            Effacer les filtres
          </Button>
        </div>
      </div>
      <div className="categoryFilter">
        <select id="select-template" multiple>
          {removeDuplicates(gameTypes)
            .sort((gameTypeA, gameTypeB) => gameTypeA - gameTypeB)
            .map((gameType) => (
              <option value={gameType}>{gameType}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
