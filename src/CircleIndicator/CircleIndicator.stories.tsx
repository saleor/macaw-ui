import { Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import clsx from "clsx";
import React from "react";

import { Decorator, GuideDecorator } from "../utils/Decorator";
import useGuideStyles from "../utils/guideStyles";
import { CircleIndicator } from "./CircleIndicator";

const StoryWrapper: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Circle Indicators
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Circle Indicators represent status of a certain element.
      </Typography>
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          className={clsx(guideClasses.border)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            placeItems: "center",
            gap: 24,
            margin: "auto",
            padding: 24,
          }}
        >
          Error <CircleIndicator color="error" />
          Warning <CircleIndicator color="warning" />
          Success <CircleIndicator color="success" />
          Info <CircleIndicator color="info" />
        </div>
      </div>
    </div>
  );
};

export const Default: Story = () => <StoryWrapper />;

export default {
  decorators: [Decorator, GuideDecorator],
  title: "Circle Indicator",
} as Meta;
