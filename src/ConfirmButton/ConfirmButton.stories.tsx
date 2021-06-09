import { Meta, Story } from "@storybook/react";
import React from "react";

import {
  ConfirmButton,
  ConfirmButtonLabels,
  ConfirmButtonTransitionState,
} from "./ConfirmButton";

const labels: ConfirmButtonLabels = {
  confirm: "Confirm",
  error: "Error",
};

export const Interactive: Story = () => {
  const [
    transitionState,
    setTransitionState,
  ] = React.useState<ConfirmButtonTransitionState>("default");
  const timer = React.useRef<number>();
  React.useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    []
  );

  const handleClick = () => {
    if (!timer.current) {
      setTransitionState("loading");
      timer.current = (setTimeout(
        () => setTransitionState("success"),
        2000
      ) as unknown) as number;
    }
  };

  return (
    <ConfirmButton
      labels={labels}
      transitionState={transitionState}
      onClick={handleClick}
    />
  );
};

export const Default: Story = () => (
  <ConfirmButton labels={labels} transitionState="default" />
);
export const Loading: Story = () => (
  <ConfirmButton
    labels={labels}
    transitionState="loading"
    noTransition={true}
  />
);
export const Error: Story = () => (
  <ConfirmButton labels={labels} transitionState="error" noTransition={true} />
);
export const Success: Story = () => (
  <ConfirmButton
    labels={labels}
    transitionState="success"
    noTransition={true}
  />
);

export default {
  title: "Confirm Button",
} as Meta;
