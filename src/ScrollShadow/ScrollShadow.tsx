import clsx from "clsx";
import React from "react";

import { useStyles } from "./styles";

export interface ScrollShadowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  show: boolean;
  variant: "bottom" | "top";
}

export const ScrollShadow: React.FC<ScrollShadowProps> = ({
  show,
  variant,
  children,
  ...props
}) => {
  const classes = useStyles();

  if (variant === "bottom") {
    return (
      <>
        <div
          {...props}
          className={clsx(classes.root, {
            [classes.bottom]: show,
          })}
        >
          {children}
        </div>
      </>
    );
  }

  return (
    <div
      {...props}
      className={clsx(classes.root, {
        [classes.top]: show,
      })}
    >
      {children}
    </div>
  );
};
ScrollShadow.displayName = "ScrollShadow";
