import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

import Hr from "../Hr";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    left: -45,
    position: "absolute",
    top: 0
  },
  card: {
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    position: "relative"
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16
    }
  },
  content: {
    marginTop: theme.spacing.unit * 2
  },
  root: {
    position: "relative"
  },
  title: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing.unit
  }
}));

export interface TimelineNoteProps {
  avatarColor?: string;
  avatarSrc?: string;
  date: React.ReactNode;
  email: string;
  message: string | null;
}

export const TimelineNote: React.FC<TimelineNoteProps> = props => {
  const { avatarColor, avatarSrc, date, email, message } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        style={{ background: avatarColor }}
        src={avatarSrc}
      >
        <PersonIcon />
      </Avatar>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.title}>
            <Typography>{email}</Typography>
            <Typography>{date}</Typography>
          </div>
          <Hr />
          <Typography
            className={classes.content}
            dangerouslySetInnerHTML={{
              __html: message.replace("\n", "<br />")
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

TimelineNote.displayName = "TimelineNote";
export default TimelineNote;
