import { Meta, Story } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";
import React from "react";

import { SquareButton } from "../SquareButton";
import { makeStyles } from "../theme";
import { Decorator } from "../utils/Decorator";
import { Tooltip, TooltipProps } from "./Tooltip";

const Template: Story<TooltipProps> = (args) => {
  return <Tooltip {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  variant: undefined,
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  variant: undefined,
  header: "App Permissions",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

const useStyles = makeStyles({
  pageWrapper: {
    display: "flex",
    width: "210vw",
    height: "150vh",
  },
  storyWrapper: {
    paddingTop: "10%",
    paddingLeft: "90vw",
  },
  tip: {
    position: "static",
    left: "12px",
    top: "12px",
  },
});

const TooltipDecorator = (storyFn: any) => {
  const classes = useStyles();

  if (isChromatic()) {
    return storyFn();
  }

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.tip}>Scroll to right to test tooltip</div>
      <div className={classes.storyWrapper}>{storyFn()}</div>
    </div>
  );
};

export default {
  title: "Tooltip",
  component: Tooltip,
  args: {
    title: "Tooltip",
    children: <SquareButton>Hover</SquareButton>,
    placement: "top-start",
    open: isChromatic() ? true : undefined,
  },
  decorators: [TooltipDecorator, Decorator],
} as Meta<TooltipProps>;
