import { fade, Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import useGuideStyles from "../../stories/guideStyles";
import { makeStyles } from "../theme";
import { Decorator, GuideDecorator } from "../utils/Decorator";
import { Button } from ".";

const useStyles = makeStyles((theme) => ({
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: theme.spacing(3),
  },
  buttonColumn: {
    border: "1px dashed #7B61FF",
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    rowGap: theme.spacing(3),
  },
}));

export const Default: Story = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Buttons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        In most cases your app will be using one of those three button types:
      </Typography>

      <div className={classes.buttonGrid}>
        <div>
          <div className={classes.buttonColumn}>
            <Button variant="primary">Primary</Button>
            <Button disabled variant="primary">
              Primary
            </Button>
          </div>
        </div>
        <div>
          <div className={classes.buttonColumn}>
            <Button variant="secondary">Secondary</Button>
            <Button disabled variant="secondary">
              Secondary
            </Button>
          </div>
        </div>
        <div>
          <div className={classes.buttonColumn}>
            <Button variant="tertiary">Tertiary</Button>
            <Button disabled variant="tertiary">
              Tertiary
            </Button>
          </div>
        </div>
      </div>

      <Typography className={guideClasses.paragraph} component="p">
        They are designed to perform most of the actions that you will need to
        add. These buttons can be placed in various places, most notably cards,
        dialogs and forms.
      </Typography>
    </div>
  );
};

export const Error: Story = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Buttons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Buttons below are intended to indicate that something in application
        needs additional attention:
      </Typography>

      <div className={classes.buttonGrid}>
        <div>
          <div className={classes.buttonColumn}>
            <Button error variant="primary">
              Primary
            </Button>
            <Button error disabled variant="primary">
              Primary
            </Button>
          </div>
        </div>
        <div>
          <div className={classes.buttonColumn}>
            <Button error variant="secondary">
              Secondary
            </Button>
            <Button error disabled variant="secondary">
              Secondary
            </Button>
          </div>
        </div>
        <div>
          <div className={classes.buttonColumn}>
            <Button error variant="tertiary">
              Tertiary
            </Button>
            <Button error disabled variant="tertiary">
              Tertiary
            </Button>
          </div>
        </div>
      </div>

      <Typography className={guideClasses.paragraph} component="p">
        An example usage of these would be failed form submit or performing
        dangerous actions, like permanently deleting objects.
      </Typography>
    </div>
  );
};

export default {
  title: "Buttons",
  decorators: [Decorator, GuideDecorator],
} as Meta;
