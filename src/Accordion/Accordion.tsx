import { default as MuiAccordion } from "@material-ui/core/Accordion"
import { default as MuiAccordionSummary, AccordionSummaryProps } from "@material-ui/core/AccordionSummary"
import { default as MuiAAccordionDetails } from "@material-ui/core/AccordionDetails"

import { ChevronIcon } from "../icons";
import React from "react";
import useStyles from "./styles";


const _AccordionSmmary: React.FC<AccordionSummaryProps> = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <MuiAccordionSummary
      ref={ref}
      expandIcon={<ChevronIcon />}
      classes={classes}
      {...props}
    />
  );
}
);
_AccordionSmmary.displayName = "AccordionSumary";


export const Accordion = MuiAccordion
export const AccordionSummary = _AccordionSmmary
export const AccordionDetails = MuiAAccordionDetails


