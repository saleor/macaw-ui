import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

export type IconProps = SvgIconTypeMap["props"] &
  Omit<React.SVGProps<SVGSVGElement>, "css">;
