import { default as MuiAccordion } from "@material-ui/core/Accordion";
import { default as MuiAAccordionDetails } from "@material-ui/core/AccordionDetails";
import {
  AccordionSummaryProps,
  default as MuiAccordionSummary,
} from "@material-ui/core/AccordionSummary";
import React from "react";

import { ChevronIcon } from "../icons";
import useStyles from "./styles";

const _AccordionSmmary: React.FC<AccordionSummaryProps> = React.forwardRef(
  (props, ref) => {
    const classes = useStyles();

    return (
      <MuiAccordionSummary
        ref={ref}
        expandIcon={<ChevronIcon data-test-id="expand-icon" />}
        classes={classes}
        {...props}
      />
    );
  }
);
_AccordionSmmary.displayName = "AccordionSumary";

export const Accordion = MuiAccordion;
export const AccordionSummary = _AccordionSmmary;
export const AccordionDetails = MuiAAccordionDetails;
