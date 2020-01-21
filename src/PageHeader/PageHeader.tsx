import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

import BasePageHeader from "../BasePageHeader";
import Skeleton from "../Skeleton";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flex: 1,
    fontSize: `${24}px !important`,
    paddingBottom: theme.spacing(2)
  }
}));

interface PageHeaderProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  const { children, className, title } = props;
  const classes = useStyles(props);

  return (
    <BasePageHeader
      className={className}
      title={
        <Typography className={classes.title} variant="h5">
          {title !== undefined ? title : <Skeleton style={{ width: "10em" }} />}
        </Typography>
      }
    >
      {children}
    </BasePageHeader>
  );
};
PageHeader.displayName = "PageHeader";
export default PageHeader;
