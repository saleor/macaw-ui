import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import React from 'react';
import SVG from 'react-inlinesvg';

import ExpandButton from './ExpandButton';
import MenuItem, { menuWidth, shrunkMenuWidth } from './MenuItem';
import { useTheme } from '../Theme';
import { SideBarProps } from './types';

const useStyles = makeStyles(
  (theme) => ({
    expandButton: {
      marginLeft: theme.spacing(2),
    },
    float: {
      position: 'fixed',
    },
    logo: {
      margin: `36px 0 ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    root: {
      transition: 'width 0.5s ease',
      width: menuWidth,
      zIndex: 100,
    },
    rootShrink: {
      width: shrunkMenuWidth,
    },
  }),
  {
    name: 'SideBar',
  }
);

const SideBar: React.FC<SideBarProps & { active: string }> = ({
  active,
  menuItems,
  onMenuItemClick,
  logoSrc,
}) => {
  const classes = useStyles({});
  const { isDark } = useTheme();
  const logo = isDark && logoSrc.dark ? logoSrc.dark : logoSrc.light;
  const [isShrunk, setShrink] = React.useState(false); // TODO: make it persistent

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootShrink]: isShrunk,
      })}
    >
      <div className={classes.float}>
        <div className={classes.logo}>
          <SVG src={logo} />
        </div>
        {menuItems.map((menuItem) => (
          <MenuItem
            active={active === menuItem.id}
            isMenuShrunk={isShrunk}
            menuItem={menuItem}
            onClick={onMenuItemClick}
            key={menuItem.ariaLabel}
          />
        ))}
        <ExpandButton
          className={classes.expandButton}
          isShrunk={isShrunk}
          onClick={() => setShrink(!isShrunk)}
        />
      </div>
    </div>
  );
};

SideBar.displayName = 'SideBar';
export default SideBar;
