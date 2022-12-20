import { makeStyles } from "@material-ui/styles";
import React from "react";
interface CustomLogoProps {
  src: string;
}
const useStyle = makeStyles(
	() => ({
    img: {
      maxWidth: '178px'
    }
  }),
  {
    name: "CustomLogo",
  }
);

export const CustomLogo = ({ src }: CustomLogoProps): JSX.Element => {
	const classes = useStyle({});
  return <img src={src} className= {classes.img} />;
};
