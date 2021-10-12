import {
  StandardTextFieldProps,
  TextField,
  Typography,
} from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  inputs: {
    display: "grid",
    rowGap: theme.spacing(3),
  },
}));

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();
  const typographyProps: Partial<StandardTextFieldProps> = {
    fullWidth: true,
    label: "Input Label",
  };

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Inputs
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        copy
      </Typography>

      <div className={classes.inputs}>
        <TextField {...typographyProps} />
        <TextField {...typographyProps} value="Filled Text" />

        <TextField {...typographyProps} disabled />
        <TextField {...typographyProps} value="Filled Text" disabled />

        <TextField
          {...typographyProps}
          error
          value="Filled Text"
          helperText="Lorem ipsum dolor site amet consectetur adipiscing elit"
        />
      </div>
    </div>
  );
};

storiesOf("Inputs", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />);
