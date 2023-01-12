import { makeStyles } from "../theme";

const avatarSize = 32;

export const useStyles = makeStyles((theme) => ({
  avatar: {
    height: avatarSize,
    width: avatarSize,
    "&&": {},
    backgroundColor: theme.palette.background.paper,
  },
  avatarPlaceholder: {
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
  },
  avatarInitials: {
    height: avatarSize,
    width: avatarSize,
    lineHeight: avatarSize + "px",
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
}));
