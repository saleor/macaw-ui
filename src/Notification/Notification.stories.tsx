import { storiesOf } from "@storybook/react";
import React from "react";
import Decorator from "stories/Decorator";

import Snackbar, { SnackbarProps } from "./Snackbar";

const props: SnackbarProps = {
  message: {
    title: "Title",
    content: "Content",
    action: {
      label: "Action",
      onClick: () => undefined,
    },
  },
  close: () => undefined,
  options: {
    type: "info",
  },
};

storiesOf("Components / Snackbar", module)
  .addDecorator(Decorator)
  .add("info", () => <Snackbar {...props} />)
  .add("warn", () => <Snackbar {...props} options={{ type: "warning" }} />)
  .add("success", () => <Snackbar {...props} options={{ type: "success" }} />)
  .add("error", () => <Snackbar {...props} options={{ type: "error" }} />);
