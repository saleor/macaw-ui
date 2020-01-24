import { BaseExtensionMessageData } from "./types";

function sendMessageToDashboard<T extends BaseExtensionMessageData>(
  message: T,
  targetOrigin: string
) {
  if (!!window.parent) {
    window.parent.postMessage(message, targetOrigin);
  }
}

export default sendMessageToDashboard;
