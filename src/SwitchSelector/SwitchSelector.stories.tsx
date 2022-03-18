import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";

import { SwitchSelector } from "./SwitchSelector";

const INITIAL_TAB = "op2";

export const Default: Story = () => {
  const [active, setActive] = useState(INITIAL_TAB);

  return (
    <SwitchSelector
      options={[
        { label: "Option 1", value: "op1" },
        { label: "Option 2", value: "op2" },
        { label: "Option 3", value: "op3" },
        { label: "Option 4", value: "op4" },
      ]}
      activeTab={active}
      setActiveTab={setActive}
    />
  );
};

export const NoInitialTab: Story = () => {
  const [active, setActive] = useState<string | undefined>();

  return (
    <SwitchSelector
      options={[
        { label: "Option 1", value: "op1" },
        { label: "Option 2", value: "op2" },
        { label: "Option 3", value: "op3" },
        { label: "Option 4", value: "op4" },
      ]}
      activeTab={active}
      setActiveTab={setActive}
    />
  );
};

export default {
  title: "Switch selector",
} as Meta;
