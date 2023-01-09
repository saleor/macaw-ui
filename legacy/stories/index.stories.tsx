import { Button, Link, Typography } from "@material-ui/core";
import { lighten } from "@material-ui/core/styles";
import { storiesOf } from "@storybook/react";
import React from "react";
import SVG from "react-inlinesvg";

import { Alert } from "../src";
import { light, makeStyles, ThemeProvider } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
import * as logo from "./assets/macaw-ui-logo.svg";

const useStyles = makeStyles((theme) => ({
  authors: {
    display: "flex",
    justifyContent: "space-between",
  },
  authorsText: {
    fontWeight: 600,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
  logo: {
    marginBottom: theme.spacing(6),
  },
  root: {},
}));

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <SVG className={classes.logo} src={logo} />
      <Typography className={guideClasses.paragraph} component="p">
        Welcome to MacawUI.
        <br />
        This is the official React UI Kit for Saleor—an open-source
        GraphQL-first and Next.js ready e-commerce platform.
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        You can find most of the elements used in the creation of Saleor's
        dashboard interface and use it to create projects for your specific
        purposes. Use the left-hand side navigation to choose between different
        pages on which you can find categorized UI Components.
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Code for this documentation is easily accesible{" "}
        <Link href="https://github.com/mirumee/macaw-ui" target="_blank">
          in our repository
        </Link>
        , in case you need to check how we made things you'll see here.
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Have a great time working on your projects and empowering your users. If
        you have any questions, feel free to let us know on{" "}
        <Link
          href="https://github.com/mirumee/saleor/discussions"
          target="_blank"
        >
          GitHub Discussions
        </Link>
        .
      </Typography>
      <div className={classes.authors}>
        <Typography className={classes.authorsText}>Saleor Team</Typography>
        <Typography className={classes.authorsText}>
          visit us at:{" "}
          <Link href="https://saleor.io" target="_blank">
            saleor.io
          </Link>
        </Typography>
      </div>
      <footer className={classes.footer}>
        <Typography variant="body2">
          Distributed under the Creative Common Attribution 4.0 International
          License
        </Typography>
        <Typography variant="body2">
          <Link
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            https://creativecommons.org/licenses/by/4.0/
          </Link>
        </Typography>
      </footer>
    </div>
  );
};

const CustomTheme: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Custom Themes
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        It's possible to override both themes and component internal styles
        using{" "}
        <Typography color="primary" className={guideClasses.code}>
          overrides
        </Typography>{" "}
        and{" "}
        <Typography color="primary" className={guideClasses.code}>
          palettes
        </Typography>{" "}
        props. MacawUI uses deep merge algorithm to combine supplied props with
        its own theme.
      </Typography>
      <Alert variant="warning" title="Saleor Marketplace">
        If you’re using MacawUI to create a Saleor App for marketplace, you must
        not modify the existing theme
      </Alert>
      <Typography className={guideClasses.sectionHeader} variant="h3">
        Example
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Let's try to override buttons:
      </Typography>
      <ThemeProvider
        palettes={{
          light: { ...light, primary: "#ff7a93", secondary: "#ffbf7a" },
        }}
        overrides={{
          overrides: {
            MuiButton: {
              containedPrimary: {
                background: `linear-gradient(45deg, #ff7a93 0%, ${lighten(
                  "#ff7a93",
                  0.5
                )} 100%)`,
              },
              containedSecondary: {
                background: `linear-gradient(45deg, #ffbf7a 0%, ${lighten(
                  "#ffbf7a",
                  0.5
                )} 100%)`,
              },
            },
          },
        }}
      >
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </ThemeProvider>
    </div>
  );
};

storiesOf("Home", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />)
  .add("custom theme", () => <CustomTheme />);
