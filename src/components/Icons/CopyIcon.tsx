import { createSVGWrapper } from "./SVGWrapper";

export const CopyIcon = createSVGWrapper(
  <>
    <path
      fill="currentColor"
      d="M4 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2H6v11a2 2 0 0 1-2-2V6Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-9Zm0 2h9v9h-9v-9Z"
      clipRule="evenodd"
    />
  </>
);
