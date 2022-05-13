import { Divider, Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import * as macawIcons from "../src/icons";
import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";

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
const indicators = sortedIcons.filter((icon) =>
  /Indicator/.test(icon.displayName)
);
const mediumIcons = sortedIcons.filter(
  (icon) => ![...smallIcons, ...largeIcons, ...indicators].includes(icon)
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

      <SectionHeader>Large 32x32</SectionHeader>
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

      <SectionHeader>Indicators</SectionHeader>
      <div className={classes.iconGrid}>
        {indicators.map((Icon) => (
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

export const Docs = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Icons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Here's how to add new icons to Macaw UI:
      </Typography>

      <SectionHeader>Add new icon</SectionHeader>
      <ol>
        <li>
          Rename icons to match naming scheme: All icons should use snake case
          (my_name_of_icon.svg) + some suffix (icon, small_icon or large_icon)
          <ul>
            <li>
              <b>20x20</b> - <code>_small_icon.svg</code>
            </li>
            <li>
              <b>24x24</b> - <code>_icon.svg</code>
            </li>
            <li>
              <b>32x32</b> - <code>_large_icon.svg</code>
            </li>
          </ul>
          Batch fixing the naming using <code>rename</code> command:
          <ul>
            <li>
              Remove Figma variant prefixes:{" "}
              <code>rename -v 's/.+=//a' *.svg</code>
            </li>
            <li>
              To lower case: <code>rename -f -c *.svg</code>
            </li>
            <li>
              Add _icon to the name:{" "}
              <code>rename -f -c -v 's/.svg/_icon.svg/' *.svg</code>
            </li>
          </ul>
        </li>
        <li>
          Import icons SVG files into <code>src/assets/icons</code> directory
          <ul>
            <li>
              <b>20x20</b> - for icons with 20px width and height
            </li>
            <li>
              <b>24x24</b> - for icons with 24px width and height
            </li>
            <li>
              <b>32x32</b> - for icons with 32px width and height
            </li>
          </ul>
        </li>
        <li>
          Run <code>npm run generate-icons</code> to generate icon components
        </li>
        <li>
          Icons should be visibile in Storybook. Check if the icons have correct
          color
        </li>
      </ol>

      <SectionHeader>Fixing colors</SectionHeader>
      <p>
        I case when an an icon wasn't exported with <code>currentColor</code>{" "}
        use this script for converting them to use <code>currentColor</code>:
        <pre>
          npm run optimise-icons:remove-color --
          src/assets/icons/20x20/my-icon-name.svg
        </pre>
        To convert entire folder use this script:
        <pre>
          npm run optimise-icons:remove-color -- -r -d src/assets/icons/20x20
        </pre>
        Note: some icons might use masks that need to be a specific color (for
        example white). Converting entire folder might break that
      </p>
    </div>
  );
};

storiesOf("Icons", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />)
  .add("adding more", () => <Docs />);
