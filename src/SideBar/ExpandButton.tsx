import { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '../Theme';
import ArrowIcon from '@material-ui/icons/ArrowBack';
import clsx from 'clsx';
import React from 'react';

import SquareButton from '../SquareButton';

const useStyles = makeStyles(
  (theme) => ({
    arrow: {
      transition: theme.transitions.duration.shortest + 'ms',
    },
    shrunk: {
      transform: 'scaleX(-1)',
    },
  }),
  {
    name: 'ExpandButton',
  }
);

export interface ExpandButtonProps extends ButtonProps {
  isShrunk: boolean;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ isShrunk, ...rest }) => {
  const classes = useStyles({});

  return (
    <SquareButton {...rest}>
      <ArrowIcon
        className={clsx(classes.arrow, {
          [classes.shrunk]: isShrunk,
        })}
      />
    </SquareButton>
  );
};

ExpandButton.displayName = 'ExpandButton';
export default ExpandButton;
