import {
  StandardTextFieldProps,
  TextField,
  Typography,
} from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";

const useStyles = makeStyles((theme) => ({
  inputs: {
    display: "grid",
    rowGap: theme.spacing(3),
  },
}));

const inputProps: Partial<StandardTextFieldProps> = {
  fullWidth: true,
  label: "Input Label",
};

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Inputs
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Below you will find inputs in different states:
      </Typography>

      <div className={classes.inputs}>
        <TextField {...inputProps} />
        <TextField {...inputProps} value="Filled Text" />
        <TextField {...inputProps} multiline value="Multiline" />

        <TextField {...inputProps} disabled />
        <TextField {...inputProps} value="Filled Text" disabled />
        <TextField {...inputProps} multiline value="Multiline" disabled />

        <TextField
          {...inputProps}
          error
          helperText="Lorem ipsum dolor site amet consectetur adipiscing elit"
        />
        <TextField
          {...inputProps}
          error
          value="Filled Text"
          helperText="Lorem ipsum dolor site amet consectetur adipiscing elit"
        />
        <TextField
          {...inputProps}
          error
          multiline
          value="Multiline"
          helperText="Lorem ipsum dolor site amet consectetur adipiscing elit"
        />
      </div>
    </div>
  );
};

const inputWithAdornmentProps: Partial<StandardTextFieldProps> = {
  ...inputProps,
  InputProps: {
    endAdornment: "EUR",
  },
};

const Adornments: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Inputs with adornments
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Adornments can be used to display units or loaders
      </Typography>

      <div className={classes.inputs}>
        <TextField {...inputWithAdornmentProps} value="Filled Text" />
        <TextField {...inputWithAdornmentProps} multiline value="Multiline" />

        <TextField {...inputWithAdornmentProps} value="Filled Text" disabled />
        <TextField
          {...inputWithAdornmentProps}
          multiline
          value="Multiline"
          disabled
        />

        <TextField
          {...inputWithAdornmentProps}
          error
          value="Filled Text"
          helperText="Lorem ipsum dolor site amet consectetur adipiscing elit"
        />
        <TextField
          {...inputWithAdornmentProps}
          error
          multiline
          value="Multiline"
          helperText="Lorem ipsum dolor site amet consectetur adipiscing elit"
        />
      </div>
    </div>
  );
};

storiesOf("Inputs", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />)
  .add("with adornments", () => <Adornments />);
