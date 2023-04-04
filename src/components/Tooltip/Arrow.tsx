import { Arrow as RadixTooltipArrow } from "@radix-ui/react-tooltip";
import { arrow, arrowPath } from "./Tooltip.css";

export const Arrow = () => {
  return (
    <RadixTooltipArrow asChild className={arrow}>
      <svg
        width="20"
        height="9"
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={arrowPath}
          d="M8.086 7.086.5-.5h18l-7.586 7.586a2 2 0 0 1-2.828 0Z"
        />
      </svg>
    </RadixTooltipArrow>
  );
};
