import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Portal from "@material-ui/core/Portal";
import React from "react";

import {
  ConfirmButton,
  ConfirmButtonLabels,
  ConfirmButtonTransitionState,
} from "../ConfirmButton";
import useWindowScroll from "../tools/useWindowScroll";
import { useSavebar } from "./context";
import useStyles from "./styles";

export type SavebarLabels = ConfirmButtonLabels &
  Record<"delete" | "cancel", string>;
export interface SavebarProps {
  disabled: boolean;
  state: ConfirmButtonTransitionState;
  labels: SavebarLabels;
  onCancel: () => void;
  onDelete?: () => void;
  onSubmit: () => void;
}

export const Savebar: React.FC<SavebarProps> = ({
  disabled,
  labels,
  state,
  onCancel,
  onDelete,
  onSubmit,
  ...rest
}) => {
  const classes = useStyles();

  const { anchor, docked, setDocked } = useSavebar();
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
            <CardContent className={classes.content}>
              {!!onDelete && (
                <Button
                  variant="contained"
                  onClick={onDelete}
                  className={classes.deleteButton}
                  data-test="button-bar-delete"
                >
                  {labels.delete}
                </Button>
              )}
              <div className={classes.spacer} />
              <Button
                className={classes.cancelButton}
                variant="text"
                onClick={onCancel}
                data-test="button-bar-cancel"
              >
                {labels.cancel}
              </Button>
              <ConfirmButton
                disabled={disabled}
                labels={labels}
                onClick={onSubmit}
                transitionState={state}
                data-test="button-bar-confirm"
                onTransitionToDefault={() => setDocked(true)}
              />
            </CardContent>
          </Card>
        </Container>
      </div>
    </Portal>
  );
};
Savebar.displayName = "Savebar";
