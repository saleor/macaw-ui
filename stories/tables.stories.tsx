import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResponsiveTable } from "../src";
import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  colCalories: {
    width: 180,
  },
}));

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Tables
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Tables play a huge part in creating dashboards. If you're building a Saleor
        Extension, it's probably what you're going to use for displaying tabular
        data. In Saleor Dashboard, we build our tables like this:
      </Typography>

      <ResponsiveTable>
        <colgroup>
          <col />
          <col className={classes.colCalories} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Calories (per 100g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Baked Potato</TableCell>
            <TableCell>93 kcal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>French Fries</TableCell>
            <TableCell>312 kcal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cheddar</TableCell>
            <TableCell>403 kcal</TableCell>
          </TableRow>
        </TableBody>
      </ResponsiveTable>

      <Typography className={guideClasses.paragraph} component="p">
        When our data is not ready, either calculating or fetching, we display{" "}
        <Typography className={guideClasses.code}>
          &lt;Skeleton /&gt;
        </Typography>{" "}
        component that indicates its loading status:
      </Typography>
      <ResponsiveTable>
        <colgroup>
          <col />
          <col className={classes.colCalories} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Calories (per 100g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
          </TableRow>
        </TableBody>
      </ResponsiveTable>
    </div>
  );
};

storiesOf("Tables", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />);
