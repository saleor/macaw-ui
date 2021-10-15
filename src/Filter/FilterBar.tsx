import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import React from "react";

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
        fd.map((f) => (f.name === name ? { ...f, filter } : f))
      );

    const availableFilters = utils.getAvailableFilters(filterData);

    React.useEffect(
      () => changeCb(utils.getActiveFilters(filterData)),
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
          onChange,
        }}
      >
        {children}
        <Card className={classes.bar} ref={ref} elevation={20}>
          <CardHeader
            title={labels.header}
            action={
              <IconButton onClick={onClose}>
                <Close />
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
  }
);
FilterBar.displayName = "FilterBar";
export default FilterBar;
