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
import { ButtonTooltipDecorator } from "./ButtonTooltipDecorator";
import { useSavebar } from "./context";
import useStyles from "./styles";

export type SavebarLabels = ConfirmButtonLabels &
  Record<"delete" | "cancel", string>;
export type SavebarTooltips = Partial<
  Record<"confirm" | "delete" | "cancel", string>
>;
export interface SavebarProps {
  disabled: boolean;
  state: ConfirmButtonTransitionState;
  labels: SavebarLabels;
  tooltips?: SavebarTooltips;
  onCancel: () => void;
  onDelete?: () => void;
  onSubmit: () => void;
}

export const Savebar: React.FC<SavebarProps> = ({
  disabled,
  labels,
  tooltips,
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
                <ButtonTooltipDecorator tooltip={tooltips?.delete}>
                  <Button
                    variant="contained"
                    onClick={onDelete}
                    className={classes.deleteButton}
                    data-test="button-bar-delete"
                  >
                    {labels.delete}
                  </Button>
                </ButtonTooltipDecorator>
              )}
              <div className={classes.spacer} />
              <ButtonTooltipDecorator tooltip={tooltips?.cancel}>
                <Button
                  className={classes.cancelButton}
                  variant="text"
                  onClick={onCancel}
                  data-test="button-bar-cancel"
                >
                  {labels.cancel}
                </Button>
              </ButtonTooltipDecorator>
              <ButtonTooltipDecorator tooltip={tooltips?.confirm}>
                <ConfirmButton
                  disabled={disabled}
                  labels={labels}
                  onClick={onSubmit}
                  transitionState={state}
                  data-test="button-bar-confirm"
                  onTransitionToDefault={() => setDocked(true)}
                />
              </ButtonTooltipDecorator>
            </CardContent>
          </Card>
        </Container>
      </div>
    </Portal>
  );
};
Savebar.displayName = "Savebar";
