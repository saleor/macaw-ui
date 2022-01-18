import { Meta, Story } from "@storybook/react";
import React from "react";
import { Decorator, GuideDecorator } from "../utils/Decorator";
import useGuideStyles from "../utils/guideStyles";

import { Pill, PillProps } from "./Pill";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

const labels = {
  error: "Error",
  warning: "Warning",
  success: "Success",
  info: "Info",
};

const PillGroup: React.FC<PillProps> = (props) => (
  <>
    <Pill {...props} />
    <Pill {...props} onClick={() => undefined} />
    <Pill {...props} onClick={() => undefined} active />
  </>
);

const StoryWrapper: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Pills
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Pills are used to display certain status of a given entity. It could be
        paid or unpaid order, a VAT number awaiting verification, or a plugin that
        had been disabled.
      </Typography>
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          className={clsx(guideClasses.border, guideClasses.grid)}
          style={{
            gap: 24,
            margin: "auto",
            padding: 24,
          }}
        >
          <PillGroup color="error" label={labels.error} />
          <PillGroup color="warning" label={labels.warning} />
          <PillGroup color="success" label={labels.success} />
          <PillGroup color="info" label={labels.info} />
        </div>
      </div>
    </div>
  );
};

export const Default: Story = () => <StoryWrapper />;

export default {
  title: "Pill",
  decorators: [Decorator, GuideDecorator],
} as Meta;
