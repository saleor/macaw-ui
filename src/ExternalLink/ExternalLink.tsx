import Typography, { TypographyProps } from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles({
  link: {
    textDecoration: "none"
  }
});

interface ExternalLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  typographyProps?: TypographyProps;
}

const ExternalLink: React.FC<ExternalLinkProps> = props => {
  const { className, children, href, typographyProps, ...rest } = props;
  const classes = useStyles(props);

  return (
    <a href={href} className={classes.link} {...rest}>
      <Typography className={className} color="primary" {...typographyProps}>
        {children}
      </Typography>
    </a>
  );
};
ExternalLink.displayName = "ExternalLink";
export default ExternalLink;
