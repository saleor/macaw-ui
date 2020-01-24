import { useEffect } from "react";

import { BaseExtensionMessageData, ExtensionMessageEvent } from "./types";

function useExtensionMessage<T extends BaseExtensionMessageData>(
  handle: (message: ExtensionMessageEvent<T>) => void
) {
  useEffect(() => {
    window.addEventListener("message", handle);

    return () => window.removeEventListener("message", handle);
  }, []);
}

export default useExtensionMessage;
