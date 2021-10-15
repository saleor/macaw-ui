import { Meta, Story } from "@storybook/react";
import React from "react";
import { makeStyles } from "..";

import { LayoutButton } from "./LayoutButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: theme.spacing(3),
  },
}));

export const Default: Story = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LayoutButton>Lorem Ipsum</LayoutButton>
      <LayoutButton state="hover">Lorem Ipsum</LayoutButton>
      <LayoutButton state="active">Lorem Ipsum</LayoutButton>
    </div>
  );
};

export default {
  title: "Layout Button",
} as Meta;
