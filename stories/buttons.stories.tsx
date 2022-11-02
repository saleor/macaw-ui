import { FormControlLabel, Typography } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, DeleteIcon, IconButton, LayoutButton, PillLink } from "../src";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
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
            <div className={guideClasses.gridCell}>
              <IconButton variant="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton variant="secondary">
                <DeleteIcon />
              </IconButton>
              <IconButton disabled>
                <DeleteIcon />
              </IconButton>
              <IconButton variant="primary" state="hover">
                <DeleteIcon />
              </IconButton>
              <IconButton variant="secondary" state="hover">
                <DeleteIcon />
              </IconButton>
              <IconButton disabled state="hover">
                <DeleteIcon />
              </IconButton>
              <IconButton variant="primary" state="active">
                <DeleteIcon />
              </IconButton>
              <IconButton variant="secondary" state="active">
                <DeleteIcon />
              </IconButton>
              <IconButton disabled state="active">
                <DeleteIcon />
              </IconButton>
            </div>
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
          <Cell>
            <Button variant="secondary">
              <DeleteIcon />
              With Icon
            </Button>
            <Button disabled variant="secondary">
              <DeleteIcon />
              With Icon
            </Button>
          </Cell>
        </div>
        <div>
          <Cell>
            <Button variant="secondary">Secondary</Button>
            <Button disabled variant="secondary">
              Secondary
            </Button>
            <Button variant="secondary" color="text">
              Secondary Text
            </Button>
            <Button disabled variant="secondary" color="text">
              Secondary Text
            </Button>
          </Cell>
          <Cell>
            <LayoutButton>Layout</LayoutButton>
            <LayoutButton state="hover">Layout</LayoutButton>
            <LayoutButton state="active">Layout</LayoutButton>
          </Cell>
        </div>
        <div>
          <Cell>
            <Button variant="tertiary">Tertiary</Button>
            <Button disabled variant="tertiary">
              Tertiary
            </Button>
            <Button variant="tertiary" color="text">
              Tertiary Text
            </Button>
            <Button disabled variant="tertiary" color="text">
              Tertiary Text
            </Button>
          </Cell>
          <Cell>
            <FormControlLabel
              control={
                <IconButton variant="secondary">
                  <DeleteIcon />
                </IconButton>
              }
              label="Delete from list"
            />
            <FormControlLabel
              control={
                <IconButton hoverOutline={false} variant="secondary">
                  <ArrowDownward />
                </IconButton>
              }
              label="Expand"
            />
            <FormControlLabel
              control={
                <IconButton state="hover" variant="secondary">
                  <DeleteIcon />
                </IconButton>
              }
              label="Hover"
            />
            <FormControlLabel
              control={
                <IconButton state="active" variant="secondary">
                  <DeleteIcon />
                </IconButton>
              }
              label="Focused"
            />
            <FormControlLabel
              control={
                <IconButton disabled variant="secondary">
                  <DeleteIcon />
                </IconButton>
              }
              label="Disabled"
            />
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
            <div className={guideClasses.gridCell}>
              <IconButton error variant="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton error variant="secondary">
                <DeleteIcon />
              </IconButton>
              <IconButton error disabled>
                <DeleteIcon />
              </IconButton>
              <IconButton error variant="primary" state="hover">
                <DeleteIcon />
              </IconButton>
              <IconButton error variant="secondary" state="hover">
                <DeleteIcon />
              </IconButton>
              <IconButton error disabled state="hover">
                <DeleteIcon />
              </IconButton>
              <IconButton error variant="primary" state="active">
                <DeleteIcon />
              </IconButton>
              <IconButton error variant="secondary" state="active">
                <DeleteIcon />
              </IconButton>
              <IconButton error disabled state="active">
                <DeleteIcon />
              </IconButton>
            </div>
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
