import { Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { makeStyles } from "../theme";
import { Decorator, GuideDecorator } from "../utils/Decorator";
import useGuideStyles from "../utils/guideStyles";
import { PageTab } from "./PageTab";
import { PageTabPanel } from "./PageTabPanel";
import { PageTabs } from "./PageTabs";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    background: theme.palette.background.default,
    borderRadius: 4,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
const InteractiveStory: React.FC = () => {
  const [tab, setTab] = React.useState("lorem");
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Page Tabs
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Page tabs are often used to switch between different views related to
        the same content. They can also be used to switch between sections of a
        form, or a table.
      </Typography>

      <div className={classes.tabContainer}>
        <PageTabs value={tab} onChange={setTab}>
          <PageTab value="lorem" label="Lorem" />
          <PageTab value="ipsum" label="Ipsum" />
          <PageTab value="dolor" label="Dolor" />
        </PageTabs>
      </div>
      <PageTabPanel show={tab === "lorem"}>
        Currently opened tab is "Lorem"
      </PageTabPanel>
      <PageTabPanel show={tab === "ipsum"}>
        Currently opened tab is "Ipsum"
      </PageTabPanel>
      <PageTabPanel show={tab === "dolor"}>
        Currently opened tab is "Dolor"
      </PageTabPanel>
    </div>
  );
};
export const Default: Story = () => <InteractiveStory />;
export default {
  decorators: [Decorator, GuideDecorator],
  title: "PageTab",
} as Meta;
