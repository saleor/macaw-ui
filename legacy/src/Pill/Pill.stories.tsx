import Typography from "@material-ui/core/Typography";
import { Meta, Story } from "@storybook/react";
import clsx from "clsx";
import React from "react";

import { CopyIcon } from "../icons";
import { Decorator, GuideDecorator } from "../utils/Decorator";
import useGuideStyles from "../utils/guideStyles";
import { Pill, PillProps } from "./Pill";

const labels = {
  error: "Error",
  warning: "Warning",
  success: "Success",
  info: "Info",
  generic: "Generic",
  icon: "With icon",
} as const;

const PillGroup: React.FC<PillProps> = (props) => (
  <>
    <Pill {...props} onClick={() => undefined} />
    <Pill {...props} active />
    <Pill {...props} onClick={() => undefined} outlined />
    <Pill {...props} outlined active />
  </>
);

const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Pills
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Pills are used to display certain status of a given entity. It could be
        paid or unpaid order, a VAT number awaiting verification, or a plugin
        that had been disabled.
      </Typography>
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          className={clsx(guideClasses.border, guideClasses.grid)}
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            margin: "auto",
            padding: 24,
          }}
        >
          <PillGroup color="error" label={labels.error} />
          <PillGroup color="warning" label={labels.warning} />
          <PillGroup color="success" label={labels.success} />
          <PillGroup color="info" label={labels.info} />
          <PillGroup color="generic" label={labels.generic} />
          <PillGroup icon={<CopyIcon />} color="generic" label={labels.icon} />
        </div>
      </div>
    </div>
  );
};

const SmallStory: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Pills
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Small variant can be used in a places such as menu items and input
        labels, where their bigger counterparts would not fit or would take too
        much space.
      </Typography>
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          className={clsx(guideClasses.border, guideClasses.grid)}
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            margin: "auto",
            padding: 24,
          }}
        >
          <PillGroup size="small" color="error" label={labels.error} />
          <PillGroup size="small" color="warning" label={labels.warning} />
          <PillGroup size="small" color="success" label={labels.success} />
          <PillGroup size="small" color="info" label={labels.info} />
          <PillGroup size="small" color="generic" label={labels.generic} />
          <PillGroup
            size="small"
            icon={<CopyIcon />}
            color="generic"
            label={labels.icon}
          />
        </div>
      </div>
    </div>
  );
};

export const Default: Story = () => <DefaultStory />;
export const Small: Story = () => <SmallStory />;

export default {
  title: "Pill",
  decorators: [Decorator, GuideDecorator],
} as Meta;
