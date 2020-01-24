import { BaseExtensionMessageData } from "./types";

export function sendMessageToDashboard<T extends BaseExtensionMessageData>(
  message: T,
  targetOrigin: string
) {
  if (!!window.parent) {
    window.parent.postMessage(message, targetOrigin);
  }
}

export function sendMessageToExtension<T extends BaseExtensionMessageData>(
  message: T,
  targetOrigin: string
) {
  const appFrame: HTMLIFrameElement = document.querySelector("#extension-app");

  if (!!appFrame) {
    appFrame.contentWindow.postMessage(message, targetOrigin);
  }
}
