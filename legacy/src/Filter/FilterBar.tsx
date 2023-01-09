import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { CloseIcon, PlusIcon } from "../icons";
import { FilterContext } from "./context";
import { FilterRow } from "./Filter";
import { FilterMenu, FilterMenuLabels } from "./FilterMenu";
import useStyles from "./styles";
import {
  FilterData,
  FilterDetailedOptions,
  FilterInput,
  FilterLabels,
  OnFilterChangeOpts,
} from "./types";
import * as utils from "./utils";

export interface FilterBarProps {
  initial?: FilterInput[];
  labels: Record<"header" | "addButton", string> &
    FilterMenuLabels &
    FilterLabels;
  onChange: (filterData: FilterData[]) => void;
  onClose: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = React.forwardRef(
  ({ children, initial = [], labels, onChange: changeCb, onClose }, ref) => {
    const classes = useStyles();
    const [filterData, setFilterData] = React.useState<FilterData[]>([]);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const button = React.useRef(null);

    utils.validate(filterData);

    const register = (
      name: string,
      label: string,
      options: FilterDetailedOptions
    ) =>
      setFilterData((fd) => utils.register(fd, name, label, initial, options));
    const onChange = (
      name: string,
      value: string | string[],
      opts?: OnFilterChangeOpts
    ) => setFilterData((fd) => utils.change(fd, name, value, opts));
    const toggle = (name: string) =>
      setFilterData((fd) => utils.toggle(fd, name));
    const toggleRange = (name: string) =>
      setFilterData((fd) => utils.toggleRange(fd, name));
    const unregister = (name: string) =>
      setFilterData((fd) => fd.filter((filter) => filter.name !== name));
    const set = (name: string, filter: Partial<FilterData>) =>
      setFilterData((fd) =>
        fd.map((f) => (f.name === name ? { ...f, ...filter } : f))
      );
    const swap = (previousFilterName: string, nextFilterName: string) =>
      setFilterData((fd) => utils.swap(fd, previousFilterName, nextFilterName));

    const availableFilters = utils.getAvailableFilters(filterData);

    React.useEffect(
      () => changeCb(utils.getActiveFilters(filterData)),
      [filterData]
    );

    return (
      <FilterContext.Provider
        value={{
          filters: filterData,
          register,
          set,
          toggle,
          toggleRange,
          unregister,
          swap,
          onChange,
        }}
      >
        {children}
        <Card className={classes.bar} ref={ref} elevation={8}>
          <CardHeader
            title={labels.header}
            action={
              <IconButton variant="secondary" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            }
          />
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
                  className={classes.barAddBtn}
                  color="text"
                  variant="secondary"
                  ref={button}
                  onClick={() => setMenuOpen(true)}
                >
                  {labels.addButton}
                  <PlusIcon />
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
  }
);
FilterBar.displayName = "FilterBar";
export default FilterBar;
