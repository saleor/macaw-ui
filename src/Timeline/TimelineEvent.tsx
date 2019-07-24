import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  date: {
    color: theme.typography.caption.color
  },
  dateExpander: {
    color: theme.typography.caption.color,
    position: "absolute",
    right: theme.spacing.unit * 3
  },
  dot: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "100%",
    height: 8,
    left: -29,
    position: "absolute",
    top: 6,
    width: 8
  },
  noExpander: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    width: "100%"
  },
  panel: {
    "&:before": {
      display: "none"
    },
    background: "none",
    width: "100%"
  },
  root: {
    "&:last-child:after": {
      background: theme.palette.background.default,
      content: "''",
      height: "calc(50% - 4px)",
      left: `${-theme.spacing.unit * 3 - 2}px`,
      position: "absolute",
      top: "calc(50% + 4px)",
      width: "2px"
    },
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing.unit * 3,
    position: "relative",
    width: "100%"
  }
}));

export interface TimelineEventProps {
  children?: React.ReactNode;
  date: React.ReactNode;
  title: string;
}

export const TimelineEvent: React.FC<TimelineEventProps> = props => {
  const { children, date, title } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <span className={classes.dot} />
      {children ? (
        <ExpansionPanel className={classes.panel} elevation={0}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{title}</Typography>
            <Typography className={classes.dateExpander}>{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{children}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ) : (
        <div className={classes.noExpander}>
          <Typography>{title}</Typography>
          <Typography className={classes.date}>{date}</Typography>
        </div>
      )}
    </div>
  );
};

TimelineEvent.displayName = "TimelineEvent";
export default TimelineEvent;
