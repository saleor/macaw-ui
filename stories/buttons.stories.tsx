import { Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";
import Delete from "@material-ui/icons/Delete";

import useGuideStyles from "./guideStyles";
import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import { PillLink, Button, IconButton, LayoutButton } from "../src";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: theme.spacing(3),
  },
  cell: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
    alignItems: "center",
    border: "1px dashed #7B61FF",
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    rowGap: theme.spacing(3),
  },
}));

const Cell: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.cell}>{children}</div>;
};

export const Default: Story = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Buttons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        In most cases your app will be using one of those button types:
      </Typography>

      <div className={classes.grid}>
        <div>
          <Cell>
            <Button variant="primary">Primary</Button>
            <Button disabled variant="primary">
              Primary
            </Button>
          </Cell>
          <Cell>
            <IconButton>
              <Delete />
            </IconButton>
            <IconButton disabled>
              <Delete />
            </IconButton>
          </Cell>
        </div>
        <div>
          <Cell>
            <Button variant="secondary">Secondary</Button>
            <Button disabled variant="secondary">
              Secondary
            </Button>
          </Cell>
          <Cell>
            <PillLink href="#">Clickable Pill</PillLink>
            <PillLink href="#" state="hover">
              Clickable Pill
            </PillLink>
            <PillLink href="#" state="active">
              Clickable Pill
            </PillLink>
          </Cell>
        </div>
        <div>
          <Cell>
            <Button variant="tertiary">Tertiary</Button>
            <Button disabled variant="tertiary">
              Tertiary
            </Button>
          </Cell>
          <Cell>
            <LayoutButton>Layout</LayoutButton>
            <LayoutButton state="hover">Layout</LayoutButton>
            <LayoutButton state="active">Layout</LayoutButton>
          </Cell>
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

      <div className={classes.grid}>
        <div>
          <Cell>
            <Button error variant="primary">
              Primary
            </Button>
            <Button error disabled variant="primary">
              Primary
            </Button>
          </Cell>
          <Cell>
            <IconButton error>
              <Delete />
            </IconButton>
            <IconButton error disabled>
              <Delete />
            </IconButton>
          </Cell>
        </div>
        <div>
          <Cell>
            <Button error variant="secondary">
              Secondary
            </Button>
            <Button error disabled variant="secondary">
              Secondary
            </Button>
          </Cell>
        </div>
        <div>
          <Cell>
            <Button error variant="tertiary">
              Tertiary
            </Button>
            <Button error disabled variant="tertiary">
              Tertiary
            </Button>
          </Cell>
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
