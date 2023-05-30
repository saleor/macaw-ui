import { KeyboardEvent } from "react";

import { InputProps } from "./Input";

// Check if input type number is valid as input type number doesn't currently work in browsers like Safari and Firefox
export const checkIfValidNumberInput = (event: KeyboardEvent<HTMLElement>) => {
  const allowedCharacter =
    /^[\d.,]*$|(Backspace|Tab|Delete|ArrowLeft|ArrowRight|ArrowDown|ArrowUp)/;

  return !event.key.match(allowedCharacter) && event.preventDefault();
};

export const checkIfDateTimeInput = (type: InputProps["type"]) =>
  ["date", "time"].includes(type ?? "");
