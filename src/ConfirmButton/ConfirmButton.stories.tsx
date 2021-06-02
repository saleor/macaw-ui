import { storiesOf } from "@storybook/react";
import React from "react";

import { Decorator } from "../../stories/Decorator";
import {
  ConfirmButton,
  ConfirmButtonLabels,
  ConfirmButtonTransitionState,
} from "./ConfirmButton";

const labels: ConfirmButtonLabels = {
  confirm: "Confirm",
  error: "Error",
};

const InteractiveStory = () => {
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

storiesOf("Confirm Button", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <ConfirmButton labels={labels} transitionState="default" />
  ))
  .add("loading", () => (
    <ConfirmButton
      labels={labels}
      transitionState="loading"
      noTransition={true}
    />
  ))
  .add("error", () => (
    <ConfirmButton
      labels={labels}
      transitionState="error"
      noTransition={true}
    />
  ))
  .add("success", () => (
    <ConfirmButton
      labels={labels}
      transitionState="success"
      noTransition={true}
    />
  ))
  .add("interactive", () => <InteractiveStory />);
