import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

import { ChangeEvent } from "../types/utils";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    "& span": {
      height: "100%",
      width: "100%"
    },
    alignSelf: "flex-start",
    marginRight: theme.spacing(5.5)
  },
  input: {
    marginTop: -theme.spacing()
  },
  noteRoot: {
    left: -theme.spacing(8.5) - 1,
    marginBottom: theme.spacing(3),
    position: "relative",
    width: `calc(100% + ${theme.spacing(8.5)}px)`
  },
  noteTitle: {
    "&:last-child": {
      paddingBottom: 0
    },
    alignItems: "center",
    background: theme.palette.background.default,
    display: "flex"
  }
}));

export type TimelineAddNoteLabels = Record<
  "textInputPlaceholder" | "sendButtonLabel",
  string
>;

export interface TimelineAddNoteProps {
  avatarSrc?: string;
  avatarColor?: string;
  labels: TimelineAddNoteLabels;
  message: string;
  onChange: (event: ChangeEvent) => void;
  onSubmit: (event: React.FormEvent<any>) => void;
}

const TimelineAddNote: React.FC<TimelineAddNoteProps> = props => {
  const { avatarColor, avatarSrc, labels, message, onChange, onSubmit } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.noteRoot}>
      <CardContent className={classes.noteTitle}>
        <Avatar
          style={{ background: avatarColor }}
          className={classes.avatar}
          src={avatarSrc}
        >
          <PersonIcon />
        </Avatar>
        <TextField
          className={classes.input}
          placeholder={labels.textInputPlaceholder}
          onChange={onChange}
          value={message}
          name="message"
          fullWidth
          multiline
          InputProps={{
            endAdornment: (
              <Button color="primary" onClick={onSubmit}>
                {labels.sendButtonLabel}
              </Button>
            )
          }}
          variant="standard"
        />
      </CardContent>
    </div>
  );
};

TimelineAddNote.displayName = "TimelineAddNote";
export default TimelineAddNote;
