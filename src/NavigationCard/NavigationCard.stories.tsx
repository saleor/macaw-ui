import Grid from "@material-ui/core/Grid";
import { Meta, Story } from "@storybook/react";
import React from "react";

import logo_lg from "./mock_logos/saleor_logo_lg.png";
import logo_md from "./mock_logos/saleor_logo_md.png";
import logo_sm from "./mock_logos/saleor_logo_sm.png";
import logo_xs from "./mock_logos/saleor_logo_xs.png";

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

export const WithPngLogos: Story = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <NavigationCard
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum odio ac tempor malesuada. Cras condimentum odio ac tempor malesuada."
        icon={<img src={logo_lg} alt="logo" />}
        largeIcon
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <NavigationCard
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum odio ac tempor malesuada."
        icon={<img src={logo_md} alt="logo" />}
        largeIcon
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <NavigationCard
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum odio ac tempor malesuada."
        icon={<img src={logo_sm} alt="logo" />}
        largeIcon
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <NavigationCard
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum odio ac tempor malesuada. Cras condimentum odio ac tempor malesuada. Cras condimentum odio ac tempor malesuada."
        icon={<img src={logo_xs} alt="logo" />}
        largeIcon
      />
    </Grid>
  </Grid>
);

export default {
  title: "Navigation Card",
} as Meta;
