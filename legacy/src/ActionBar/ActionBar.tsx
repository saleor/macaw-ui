import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Portal from "@material-ui/core/Portal";
import clsx from "clsx";
import React from "react";

import { ConfirmButtonTransitionState } from "../ConfirmButton";
import { useTheme } from "../theme";
import { useWindowScroll } from "../tools";
import { useActionBar } from "./context";
import useStyles from "./styles";

export interface ActionBarProps {
  disabled: boolean;
  state: ConfirmButtonTransitionState;
  className?: string;
  children: React.ReactNode[] | React.ReactNode;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  disabled,
  children,
  state,
  className,
  ...rest
}) => {
  const { ssr } = useTheme();
  const classes = useStyles();

  const { anchor } = useActionBar();
  const scrollPosition = useWindowScroll();

  const scrolledToBottom =
    scrollPosition.y + window.innerHeight >= document.body.scrollHeight;

  if (!anchor.current && !ssr) {
    return null;
  }

  return (
    <Portal container={anchor.current}>
      <div className={clsx(classes.root, className)} {...rest}>
        <Container maxWidth="lg">
          <Card
            className={clsx(classes.paper, {
              [classes.shadow]: !scrolledToBottom,
            })}
          >
            <CardContent className={classes.content}>{children}</CardContent>
          </Card>
        </Container>
      </div>
    </Portal>
  );
};
ActionBar.displayName = "ActionBar";
