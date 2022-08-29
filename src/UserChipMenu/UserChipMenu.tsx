import Avatar from "@mui/material/Avatar";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Hidden from "@mui/material/Hidden";
import Menu from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import React from "react";

import { LayoutButton } from "..";
import { UserChipMenuContext } from "./context";
import useStyles from "./styles";

export interface UserChipProps {
  avatar: string | null;
  initials: string;
  name: string;
  subtext?: string;
  open?: boolean;
}

export const UserChipMenu: React.FC<UserChipProps> = ({
  avatar,
  initials,
  name,
  subtext,
  children,
  open = false,
  ...props
}) => {
  const classes = useStyles({});
  const [isMenuOpened, setMenuState] = React.useState(open);
  const anchor = React.useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuState(false);

  return (
    <>
      <LayoutButton
        className={classes.userChip}
        ref={anchor}
        onClick={() => setMenuState(!isMenuOpened)}
        data-test="userMenu"
        state={isMenuOpened ? "active" : "default"}
        {...props}
      >
        {avatar ? (
          <Avatar className={classes.avatar} alt="user" src={avatar} />
        ) : (
          <div className={classes.avatarPlaceholder}>
            <div className={classes.avatarInitials}>{initials}</div>
          </div>
        )}
        <div className={classes.labelContainer}>
          <Hidden smDown>
            <div>
              <Typography className={classes.label} variant="body2">
                {name}
              </Typography>
              {subtext && (
                <Typography
                  className={classes.label}
                  variant="body2"
                  color="textSecondary"
                >
                  {subtext}
                </Typography>
              )}
            </div>
          </Hidden>
        </div>
      </LayoutButton>
      <Popper
        className={classes.popover}
        open={isMenuOpened}
        anchorEl={anchor.current}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "right top" : "right bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={closeMenu} mouseEvent="onClick">
                <Menu disablePadding>
                  <UserChipMenuContext.Provider value={closeMenu}>
                    {children}
                  </UserChipMenuContext.Provider>
                </Menu>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
UserChipMenu.displayName = "UserChip";
