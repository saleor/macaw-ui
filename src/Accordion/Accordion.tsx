import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAAccordionDetails,
  AccordionSummaryProps
} from "@material-ui/core";
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


