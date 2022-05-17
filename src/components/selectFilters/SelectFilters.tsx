import React from "react";
import { Button } from "react-bootstrap";
import { useFiltersT } from "../../utils/types/types";
import "./SelectFilters.scss";
import games from "../../test.json";
import Filters from "../../interfaces/Filters/Filters";
import { btnCreateOperationStyle, pageTitle } from "../../utils/style/style";

function SelectFilters({ filters, setFilters, resetFilters }: useFiltersT) {
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
    </>
  );
}

export default SelectFilters;
