import clsx from "clsx";
import React from "react";
import { Button, makeStyles } from "..";

type SwitchSelectorOptions = {
  label: string | React.ReactNode;
  value: string;
};

interface SwitchSelectorProps {
  options: SwitchSelectorOptions[];
  setActiveTab: (index: string) => void;
  activeTab?: string;
}

const useStyles = makeStyles((theme) => ({
  switchSelector: {
    border: `1px solid ${theme.palette.saleor.main[5]}`,
    padding: "6px",
    borderRadius: 4,
    width: "fit-content",
    "&:not(:first-child)": {
      marginLeft: "6px",
    },
  },
  button: {
    color: "#77738C",
    background: "none",
    borderColor: "transparent",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.saleor.active[1],
      border: `1px solid ${theme.palette.saleor.active[1]}`,
    },
  },
  buttonActive: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.saleor.active[1],
  },
}));

export const SwitchSelector: React.FC<SwitchSelectorProps> = ({
  options,
  setActiveTab,
  activeTab,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.switchSelector}>
      {options.map(({ label, value }) => (
        <Button
          key={value}
          onClick={() => setActiveTab(value)}
          className={clsx(classes.button, {
            [classes.buttonActive]: value === activeTab,
          })}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

SwitchSelector.displayName = "SwitchSelector";
