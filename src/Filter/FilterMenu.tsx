import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { useFilters } from "./context";
import useStyles from "./styles";
import { getAvailableFilters } from "./utils";

export type FilterMenuLabels = Record<"header", string>;
export interface FilterMenuProps {
  anchorEl: HTMLElement | null;
  labels: FilterMenuLabels;
  open: boolean;
  onClose: () => void;
}

export const FilterMenu: React.FC<FilterMenuProps> = ({
  anchorEl,
  labels,
  open,
  onClose,
}) => {
  const classes = useStyles();
  const { filters, toggle } = useFilters();

  const availableFilters = getAvailableFilters(filters);
  const handleFilterClick = (filterName: string) => {
    toggle(filterName);
    onClose();
  };

  return (
    <Popper
      anchorEl={anchorEl}
      open={open}
      disablePortal
      placement="bottom-start"
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper elevation={20} className={classes.menuPaper}>
          <div className={classes.menuContent}>
            <Typography
              className={classes.menuHeader}
              color="textSecondary"
              variant="caption"
            >
              {labels.header}
            </Typography>
          </div>
          {availableFilters.map((filter) => (
            <MenuItem
              key={filter.name}
              onClick={() => handleFilterClick(filter.name)}
            >
              {filter.label}
            </MenuItem>
          ))}
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};
FilterMenu.displayName = "FilterMenu";
