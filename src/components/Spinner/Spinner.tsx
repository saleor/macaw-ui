import { classNames } from "~/utils";

import { SpinIcon } from "../Icons";
import { SVGWrapperProps } from "../Icons/SVGWrapper";

import { spinner } from "./Spinner.css";

export type SpinnerProps = Omit<SVGWrapperProps, "children">;

export const Spinner = ({ className, ...props }: SpinnerProps) => (
  <SpinIcon className={classNames(spinner, className)} {...props} />
);
