import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { LayoutButton } from "..";
import { Avatar } from "../Avatar";
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
        <Avatar avatar={avatar as string | undefined} initials={initials} />
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
