import { Button } from "../../Button";
import { ChervonDownIcon } from "../../Icons";
import { icon } from "../common.css";

interface TriggerButtonProps {
  disabled?: boolean;
  dataTestId?: string;
}

export const TriggerButton = ({ dataTestId, disabled }: TriggerButtonProps) => {
  return (
    <Button
      icon={<ChervonDownIcon className={icon} />}
      variant="secondary"
      type="button"
      data-test-id={dataTestId}
      disabled={disabled}
    />
  );
};

TriggerButton.displayName = "Accordion.TriggerButton";
