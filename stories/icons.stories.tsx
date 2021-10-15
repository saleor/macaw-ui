import { Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import {
  CheckboxCheckedIcon,
  CheckboxIcon,
  CheckboxIndeterminateIcon,
  CloseIcon,
  CompleteIcon,
  DeleteIcon,
  EditIcon,
  FilteringIcon,
  ImageIcon,
  InfoIcon,
  NotAllowedIcon,
  NotAllowedInvertedIcon,
  WarningIcon,
} from "../src/icons";
import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 24,
    marginBottom: theme.spacing(1),
    width: 24,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  iconGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: theme.spacing(3),
    rowGap: theme.spacing(2),
  },
}));

const icons: React.FC<{ className: string }>[] = [
  CheckboxCheckedIcon,
  CheckboxIcon,
  CheckboxIndeterminateIcon,
  CloseIcon,
  CompleteIcon,
  DeleteIcon,
  EditIcon,
  FilteringIcon,
  ImageIcon,
  InfoIcon,
  NotAllowedIcon,
  NotAllowedInvertedIcon,
  WarningIcon,
];

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Icons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Macaw UI provides following icons that may be used in your project:
      </Typography>

      <div className={classes.iconGrid}>
        {icons
          .sort((a, b) => (a.displayName > b.displayName ? 1 : -1))
          .map((Icon) => (
            <div className={classes.iconContainer}>
              <Icon className={classes.icon} />
              <Typography variant="caption" color="textSecondary">
                {Icon.displayName}
              </Typography>
            </div>
          ))}
      </div>
    </div>
  );
};

storiesOf("Icons", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />);
