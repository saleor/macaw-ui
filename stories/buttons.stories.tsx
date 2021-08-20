import { Button, fade, Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  buttonGrid: {
    background: fade(theme.palette.background.default, 0.25),
    borderRadius: 4,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: theme.spacing(3),
    rowGap: theme.spacing(2),
    padding: theme.spacing(3),
  },
}));

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Buttons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        In most cases your app will be using one of those four button types:
      </Typography>

      <div className={classes.buttonGrid}>
        <div>Primary</div>
        <div>Secondary</div>
        <div>Text</div>
        <div>Outlined</div>
        <Button variant="contained" color="primary">
          Lorem
        </Button>
        <Button variant="contained" color="secondary">
          Ipsum
        </Button>
        <Button color="primary" variant="text">
          Dolor Sit
        </Button>
        <Button color="primary" variant="outlined">
          Amet
        </Button>
        <Button disabled variant="contained" color="primary">
          Lorem
        </Button>
        <Button disabled variant="contained" color="secondary">
          Ipsum
        </Button>
        <Button disabled color="primary" variant="text">
          Dolor Sit
        </Button>
        <Button disabled color="primary" variant="outlined">
          Amet
        </Button>
      </div>

      <Typography className={guideClasses.paragraph} component="p">
        They are designed to perform most of the actions that you will need to
        add. These buttons can be placed in various places, most notably cards,
        dialogs and forms.
      </Typography>
    </div>
  );
};

storiesOf("Buttons", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />);
