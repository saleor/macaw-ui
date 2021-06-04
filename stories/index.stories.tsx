import { Button } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Decorator } from "../src/utils/Decorator";

storiesOf("Home", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <div>
      Macaw UI
      <Button color="primary" variant="contained">
        Go to components
      </Button>
    </div>
  ));
