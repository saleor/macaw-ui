import { useEffect } from "react";

import { BaseExtensionMessageData, ExtensionMessageEvent } from "./types";

export function useExtensionMessage<T extends BaseExtensionMessageData>(
  handle: (message: ExtensionMessageEvent<T>) => void
) {
  useEffect(() => {
    window.addEventListener("message", handle);

    return () => window.removeEventListener("message", handle);
  }, [handle]);
}
