import clsx from "clsx";
import React from "react";

import { Button, makeStyles } from "..";

interface SwitchSelectorButtonProps {
  value: string;
  activeTab?: string;
  onClick: () => void;
}

const useSwitchSelectorButtonStyles = makeStyles((theme) => ({
  root: {
    color: "#77738C",
    background: "none",
    borderColor: "transparent",
    cursor: "pointer",

    "&:not(:first-child)": {
      marginLeft: theme.spacing(1),
    },

    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.saleor.active[1],
      border: `1px solid ${theme.palette.saleor.active[1]}`,
    },

    "&:active": {
      backgroundColor: theme.palette.saleor.active[5],
    },
  },
  buttonSelected: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.saleor.active[1],
  },
}));

export const SwitchSelectorButton: React.FC<SwitchSelectorButtonProps> = ({
  onClick,
  value,
  children,
  activeTab,
}) => {
  const classes = useSwitchSelectorButtonStyles();

  return (
    <Button
      key={value}
      onClick={onClick}
      className={clsx(classes.root, {
        [classes.buttonSelected]: value === activeTab,
      })}
    >
      {children}
    </Button>
  );
};

SwitchSelectorButton.displayName = "SwitchSelectorButton";
