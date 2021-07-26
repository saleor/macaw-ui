import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";

import { FilterContext } from "./context";
import { FilterRow } from "./Filter";
import { FilterMenu, FilterMenuLabels } from "./FilterMenu";
import useStyles from "./styles";
import { FilterData, FilterDetailedOptions, FilterLabels } from "./types";
import * as utils from "./utils";

export interface FilterBarProps {
  labels: Record<"header" | "addButton", string> &
    FilterMenuLabels &
    FilterLabels;
}

export const FilterBar: React.FC<FilterBarProps> = ({ children, labels }) => {
  const classes = useStyles();
  const [filterData, setFilterData] = React.useState<FilterData[]>([]);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const button = React.useRef(null);

  utils.validate(filterData);

  const register = (
    name: string,
    label: string,
    options: FilterDetailedOptions
  ) => setFilterData((fd) => utils.register(fd, name, label, options));
  const onChange = (name: string, value: string) =>
    setFilterData((fd) => utils.change(fd, name, value));
  const toggle = (name: string) =>
    setFilterData((fd) => utils.toggle(fd, name));
  const unregister = (name: string) =>
    setFilterData((fd) => fd.filter((filter) => filter.name !== name));

  const availableFilters = utils.getAvailableFilters(filterData);

  console.log(filterData);

  return (
    <FilterContext.Provider
      value={{ filters: filterData, register, toggle, unregister, onChange }}
    >
      {children}
      <Card className={classes.bar}>
        <CardHeader title={labels.header} />
        <CardContent>
          <div>
            {utils
              .getActiveFilters(filterData)
              .sort((a, b) => (a.sortIndex > b.sortIndex ? 1 : -1))
              .map((filter, filterIndex) => (
                <FilterRow
                  key={filter.name}
                  first={filterIndex === 0}
                  labels={labels}
                  name={filter.name}
                />
              ))}
          </div>
          {!!availableFilters.length && (
            <>
              <Button
                color="primary"
                ref={button}
                onClick={() => setMenuOpen(true)}
              >
                + {labels.addButton}
              </Button>
            </>
          )}
          <FilterMenu
            anchorEl={button.current}
            labels={labels}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          />
        </CardContent>
      </Card>
    </FilterContext.Provider>
  );
};
FilterBar.displayName = "FilterBar";
export default FilterBar;
