import { FormControlLabel, Typography } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, IconButton, PillLink, LayoutButton } from "../src";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";
import { Cell } from "./utils/Cell";

// Workaround for context initialization
const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Buttons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        In most cases your app will be using one of those button types:
      </Typography>

      <div className={guideClasses.grid}>
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
          <Cell>
            <FormControlLabel
              control={
                <IconButton variant="secondary">
                  <Delete />
                </IconButton>
              }
              label="default"
            />
            <FormControlLabel
              control={
                <IconButton hoverOutline variant="secondary">
                  <Delete />
                </IconButton>
              }
              label="outlined"
            />
            <IconButton disabled variant="secondary">
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
export const Default: Story = () => <DefaultStory />;

const ErrorStory: React.FC = () => {
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

      <div className={guideClasses.grid}>
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
export const Error: Story = () => <ErrorStory />;

export default {
  title: "Buttons",
  decorators: [Decorator, GuideDecorator],
} as Meta;
