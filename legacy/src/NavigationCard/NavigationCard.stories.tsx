import Grid from "@material-ui/core/Grid";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { DeleteIcon } from "..";
import { NavigationCard } from "./NavigationCard";
import { NavigationCardBase } from "./NavigationCardBase";

export const Default: Story = () => (
  <Grid container>
    <Grid item xs={12} md={4}>
      <a href="#">
        <NavigationCard
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum odio ac tempor malesuada."
          icon={<DeleteIcon />}
        />
      </a>
    </Grid>
  </Grid>
);

export const Custom: Story = () => (
  <Grid container>
    <Grid item xs={12} md={4}>
      <NavigationCardBase>Lorem ipsum dolor sit amet</NavigationCardBase>
    </Grid>
  </Grid>
);

export default {
  title: "Navigation Card",
} as Meta;
