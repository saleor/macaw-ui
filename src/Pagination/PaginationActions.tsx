import ButtonBase from "@material-ui/core/ButtonBase";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import React from "react";

import { useTheme } from "../theme";
import useStyles from "./styles";

export interface PaginationActionsProps {
  className?: string;
  disabled?: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextIconButtonProps?: any;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const PaginationActions: React.FC<PaginationActionsProps> = ({
  className,
  disabled,
  hasNextPage,
  hasPreviousPage,
  nextIconButtonProps,
  onNextPage,
  onPreviousPage,
  ...other
}) => {
  const classes = useStyles();

  const { direction, themeType } = useTheme();

  const isDark = themeType === "dark";
  const previousDisabled = !hasPreviousPage || disabled;
  const nextDisabled = !hasNextPage || disabled;

  return (
    <div className={clsx(classes.actions, className)} {...other}>
      <ButtonBase
        className={clsx(classes.actionsButton, {
          [classes.dark]: isDark,
          [classes.actionsButtonDisabled]: previousDisabled,
        })}
        onClick={onPreviousPage}
        disabled={previousDisabled}
        data-test="button-pagination-back"
        aria-label="previous page"
      >
        {direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
      </ButtonBase>

      <ButtonBase
        className={clsx(classes.actionsButton, {
          [classes.dark]: isDark,
          [classes.actionsButtonDisabled]: nextDisabled,
        })}
        onClick={onNextPage}
        disabled={nextDisabled}
        data-test="button-pagination-next"
        aria-label="next page"
        {...nextIconButtonProps}
      >
        {direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
      </ButtonBase>
    </div>
  );
};

PaginationActions.displayName = "PaginationActions";
