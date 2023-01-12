import { Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";

import useGuideStyles from "../utils/guideStyles";
import { SwitchSelector } from "./SwitchSelector";
import { SwitchSelectorButton } from "./SwitchSelectorButton";

type SwitchSelectorButtonOptions = {
  label: string | React.ReactNode;
  value: string;
};

const INITIAL_TAB = "op2";

const OPTIONS: SwitchSelectorButtonOptions[] = [
  { label: "Option 1", value: "op1" },
  { label: "Option 2", value: "op2" },
  { label: "Option 3", value: "op3" },
  { label: "Option 4", value: "op4" },
];

const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();
  const [active, setActive] = useState(INITIAL_TAB);

  const currentTab = OPTIONS.find((option) => option.value === active);

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Switch Selector
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Switch Selector has the functionality of a radio button group. It is
        used to change an active tab to toggle context.
      </Typography>
      <div>
        <SwitchSelector>
          {OPTIONS.map(({ label, value }) => (
            <SwitchSelectorButton
              value={value}
              onClick={() => setActive(value)}
              activeTab={active}
            >
              {label}
            </SwitchSelectorButton>
          ))}
        </SwitchSelector>

        <div style={{ marginTop: "2em" }}>
          <Typography>{`You have selected ${currentTab?.label}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = () => <DefaultStory />;

export default {
  title: "Switch selector",
} as Meta;
