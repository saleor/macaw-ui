import { HTMLAttributes } from "react";
import { classNames } from "~/utils";

import { Box, PropsWithBox } from "..";

import { skeleton } from "./Skeleton.css";

export type SkeletonProps = PropsWithBox<
  Omit<HTMLAttributes<HTMLDivElement>, "color">
>;

// TODO: extract to own component after acceptance
export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <Box
      className={classNames(skeleton, className)}
      backgroundColor="interactiveNeutralSecondaryPressing"
      width="100%"
      height={1}
      borderRadius={2}
      {...props}
    />
  );
};
