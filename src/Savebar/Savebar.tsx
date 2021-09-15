import Button from "@material-ui/core/Button";
import React from "react";

import { useActionBar } from "../ActionBar";
import { ActionBar } from "../ActionBar/ActionBar";
import {
  ConfirmButton,
  ConfirmButtonLabels,
  ConfirmButtonTransitionState,
} from "../ConfirmButton";
import { ButtonTooltipDecorator } from "./ButtonTooltipDecorator";
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
}) => {
  const classes = useStyles();
  const { setDocked } = useActionBar();

  return (
    <ActionBar state={state} disabled={disabled}>
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
    </ActionBar>
  );
};
Savebar.displayName = "Savebar";
