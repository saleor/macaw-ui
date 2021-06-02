import { storiesOf } from "@storybook/react";
import React from "react";

import { Decorator } from "../../stories/Decorator";
import { SavebarProvider, useSavebar } from "./context";
import { Savebar, SavebarLabels, SavebarProps } from "./Savebar";

const labels: SavebarLabels = {
  confirm: "Confirm",
  error: "Error",
  cancel: "Cancel",
  delete: "Delete",
};

const Wrapper: React.FC = ({ children }) => {
  const { anchor } = useSavebar();

  return <div ref={anchor}>{children}</div>;
};

const props: SavebarProps = {
  labels,
  disabled: false,
  onCancel: () => undefined,
  onSubmit: () => undefined,
  state: "default",
};

storiesOf("Savebar", module)
  .addDecorator(Decorator)
  .addDecorator((storyFn) => <SavebarProvider>{storyFn()}</SavebarProvider>)
  .add("default", () => (
    <Wrapper>
      <Savebar {...props} />
    </Wrapper>
  ))
  .add("with delete", () => (
    <Wrapper>
      <Savebar {...props} onDelete={() => undefined} />
    </Wrapper>
  ));
