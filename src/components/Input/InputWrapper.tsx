/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode, useState } from "react";
import { Box } from "~/components/Box";
import { classNames } from "~/utils";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";

type InputValue = string | number | readonly string[] | undefined;
type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

export const useStateEvents = (
  value: InputValue,
  changeHandler?: ChangeHandler
) => {
  const [active, setActive] = useState(false);
  const typed = Boolean(value || active);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (changeHandler) {
      changeHandler(event);
    }
  };

  return {
    handlers: { onFocus, onBlur, onChange },
    value,
    active,
    typed,
  };
};

type InputWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  endAdornment?: ReactNode;
};

export const InputWrapper = ({
  children,
  id,
  typed,
  active,
  disabled,
  size,
  label,
  error,
  className,
  endAdornment,
}: InputWrapperProps) => {
  return (
    <Box
      as="label"
      htmlFor={id}
      className={classNames(
        labelRecipe({ typed, active, disabled, size, error }),
        className
      )}
      alignItems="center"
      gap={1}
    >
      <Box display="flex" flexDirection="column" width="100%">
        <Box
          as="span"
          className={classNames(spanRecipe({ typed, size, disabled, error }))}
        >
          {label}
        </Box>
        {children}
      </Box>
      {endAdornment}
    </Box>
  );
};
InputWrapper.displayName = "InputWrapper";
