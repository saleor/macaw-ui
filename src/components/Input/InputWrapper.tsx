/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode, useEffect, useState } from "react";
import { Box } from "~/components/Box";
import { classNames } from "~/utils";
import { spanRecipe, labelRecipe, LabelVariants } from "../BaseInput";

type InputValue = string | number | readonly string[] | undefined;
type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

export const useStateEvents = (
  value: InputValue,
  changeHandler?: ChangeHandler
) => {
  const [inputValue, setInputValue] = useState(value);
  const [active, setActive] = useState(false);
  const typed = Boolean(inputValue || active);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (changeHandler) {
      changeHandler(event);
    }
  };

  return {
    handlers: { onFocus, onBlur, onChange },
    value: inputValue,
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
}: InputWrapperProps) => {
  return (
    <Box
      as="label"
      htmlFor={id}
      className={classNames(
        labelRecipe({ typed, active, disabled, size, error }),
        className
      )}
    >
      <Box
        as="span"
        className={classNames(spanRecipe({ typed, size, disabled, error }))}
      >
        {label}
      </Box>
      {children}
    </Box>
  );
};
InputWrapper.displayName = "InputWrapper";
