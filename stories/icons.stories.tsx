import { Divider, Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import * as macawIcons from "../src/icons";
import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(4, 0),
  },
  icon: {
    height: 24,
    marginBottom: theme.spacing(1),
    width: 24,
  },
  iconSmall: {
    height: 20,
    marginBottom: theme.spacing(1),
    width: 20,
  },
  iconLarge: {
    height: 32,
    marginBottom: theme.spacing(1),
    width: 32,
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

const icons: React.FC<{ className: string }>[] = Object.values(macawIcons);
const sortedIcons = icons.sort((a, b) =>
  a.displayName > b.displayName ? 1 : -1
);

const smallIcons = sortedIcons.filter((icon) =>
  /SmallIcon/.test(icon.displayName)
);
const largeIcons = sortedIcons.filter((icon) =>
  /LargeIcon/.test(icon.displayName)
);
const mediumIcons = sortedIcons.filter(
  (icon) => ![...smallIcons, ...largeIcons].includes(icon)
);

const SectionHeader: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant="h6">{children}</Typography>
      <Divider />
    </div>
  );
};

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

      <SectionHeader>Small 20x20</SectionHeader>
      <div className={classes.iconGrid}>
        {smallIcons.map((Icon) => (
          <div className={classes.iconContainer}>
            <Icon className={classes.iconSmall} />
            <Typography variant="caption" color="textSecondary">
              {Icon.displayName}
            </Typography>
          </div>
        ))}
      </div>

      <SectionHeader>Medium 24x24</SectionHeader>
      <div className={classes.iconGrid}>
        {mediumIcons.map((Icon) => (
          <div className={classes.iconContainer}>
            <Icon className={classes.icon} />
            <Typography variant="caption" color="textSecondary">
              {Icon.displayName}
            </Typography>
          </div>
        ))}
      </div>

      <SectionHeader>Small 32x32</SectionHeader>
      <div className={classes.iconGrid}>
        {largeIcons.map((Icon) => (
          <div className={classes.iconContainer}>
            <Icon className={classes.iconLarge} />
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
