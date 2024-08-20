import { ChangeEventHandler, FormEventHandler } from "react";

export const formEventTypeAdapter = (
  event: ChangeEventHandler<Element> | undefined
): FormEventHandler | undefined => {
  return event;
};
