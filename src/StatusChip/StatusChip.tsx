import Chip from "@material-ui/core/Chip";
import React from "react";

import useStyles from "./styles";
import { StatusChipProps } from "./types";

export const StatusChip: React.FC<StatusChipProps> = ({
  size = "md",
  variant,
  ...rest
}) => {
  const classes = useStyles({
    size,
    variant,
    ...rest,
  });

  return <Chip classes={classes} {...rest} />;
};

StatusChip.displayName = "HeaderChip";
