import CloseIcon from "@material-ui/icons/Close";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Decorator } from "../utils/Decorator";
import { SquareButton } from "./SquareButton";

storiesOf("Components / Square Button", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <SquareButton>
      <CloseIcon />
    </SquareButton>
  ));
