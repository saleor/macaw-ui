import { Arrow as RadixPopoverArrow } from "@radix-ui/react-popover";
import { vars } from "~/theme";
import { classNames } from "~/utils";
import { arrow } from "./Popover.css";

export type PopoverArrowProps = {
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
};

export const Arrow = ({
  className,
  backgroundColor = vars.colors.background.subdued,
  borderColor = vars.colors.border.neutralPlain,
  ...props
}: PopoverArrowProps) => {
  return (
    <RadixPopoverArrow
      {...props}
      className={classNames(arrow, className)}
      asChild
    >
      <svg
        width="20"
        height="9"
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.08579 7.08579L0.5 -0.5H18.5L10.9142 7.08579C10.1332 7.86683 8.86684 7.86684 8.08579 7.08579Z"
          strokeLinejoin="round"
          fill={backgroundColor}
          stroke={borderColor}
        />
      </svg>
    </RadixPopoverArrow>
  );
};
