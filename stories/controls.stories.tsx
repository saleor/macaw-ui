import { Checkbox, Typography } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, IconButton, PillLink } from "../src";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";
import { Cell } from "./utils/Cell";

export const Default: Story = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Controls
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        In most cases your app will be using one of those button types:
      </Typography>

      <div className={guideClasses.grid}>
        <div>
          <Cell>
            <Checkbox />
            <Checkbox className="Mui-focusVisible" />
            <Checkbox checked />
            <Checkbox disabled />
            <Checkbox checked disabled />
            <Checkbox indeterminate />
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

export default {
  title: "Controls",
  decorators: [Decorator, GuideDecorator],
} as Meta;
