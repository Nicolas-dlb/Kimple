import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { FilterProps } from "../../utils/types/types";
import "./Filter.scss";

function Filter({ label, filters, setFilters }: FilterProps) {
  const content = label === "Mois" ? filters.months : filters.years;
  const value = label === "Mois" ? filters.activeMonths : filters.activeYears;
  return (
    <div className="filter">
      <p className="filterLabel">{label}</p>
      <div className="filterButtons">
        {/* {months.map(month =>  <Button variant="dark" size="sm" type='button' aria-pressed="true" >{month}</Button>)} */}
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={(selectedValue) => {
            if (label === "Mois") {
              setFilters({
                ...filters,
                activeMonths: selectedValue,
              });
            } else {
              setFilters({
                ...filters,
                activeYears: selectedValue,
              });
            }
          }}
        >
          {content.map((time, idx) => (
            <ToggleButton
              key={`${label}-${idx + 1}`}
              id={`${label}-${idx + 1}`}
              type="checkbox"
              variant="dark"
              style={{
                borderRadius: "5px",
                fontSize: "10px",
                margin: "1px",
                boxShadow: "none !important",
                flex: "none",
              }}
              name="radio"
              size="sm"
              value={time.value}
              checked={
                label === "Mois"
                  ? filters.activeMonths.includes(time.value)
                  : filters.activeYears.includes(time.value)
              }
            >
              {time.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default Filter;
