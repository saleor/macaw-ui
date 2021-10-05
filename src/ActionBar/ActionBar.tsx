import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Portal from "@material-ui/core/Portal";
import React from "react";

import { ConfirmButtonTransitionState } from "../ConfirmButton";
import { useWindowScroll } from "../tools";
import { useActionBar } from "./context";
import useStyles from "./styles";

export interface ActionBarProps {
  disabled: boolean;
  state: ConfirmButtonTransitionState;
  children: React.ReactNode[] | React.ReactNode;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  disabled,
  children,
  state,
  ...rest
}) => {
  const classes = useStyles();

  const { anchor, docked, setDocked } = useActionBar();
  const scrollPosition = useWindowScroll();

  React.useEffect(() => {
    if (!disabled && state !== "loading") {
      setDocked(false);
    }
  }, [disabled, state, setDocked]);
  React.useEffect(() => () => setDocked(true), [setDocked]);

  const scrolledToBottom =
    scrollPosition.y + window.innerHeight >= document.body.scrollHeight;

  if (!anchor.current) {
    return null;
  }

  return (
    <Portal container={anchor.current}>
      <div className={classes.root} {...rest}>
        <Container maxWidth="lg">
          <Card
            className={classes.paper}
            elevation={!(docked || scrolledToBottom) ? 16 : 0}
          >
            <CardContent className={classes.content}>{children}</CardContent>
          </Card>
        </Container>
      </div>
    </Portal>
  );
};
ActionBar.displayName = "ActionBar";
