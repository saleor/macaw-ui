import MuiAvatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import React from "react";

import { useStyles } from "./styles";

export interface AvatarProps {
  /** User initials, e.g. John Smith = JS */
  initials: string;
  /** URL to the user avatar image */
  avatar?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, avatar }) => {
  const classes = useStyles();

  if (avatar) {
    return <MuiAvatar className={classes.avatar} alt="user" src={avatar} />;
  }

  return (
    <div className={clsx(classes.avatar, classes.avatarPlaceholder)}>
      <div className={classes.avatarInitials}>{initials}</div>
    </div>
  );
};
