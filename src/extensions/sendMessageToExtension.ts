import { BaseExtensionMessageData } from "./types";

function sendMessageToExtension<T extends BaseExtensionMessageData>(
  message: T,
  targetOrigin: string
) {
  const appFrame: HTMLIFrameElement = document.querySelector("#extension-app");

  if (!!appFrame) {
    appFrame.contentWindow.postMessage(message, targetOrigin);
  }
}

export default sendMessageToExtension;
