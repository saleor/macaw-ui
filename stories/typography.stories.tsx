import { Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
import { Cell } from "./utils/Cell";

const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Typography
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Examples of typography variants you can use with MacawUI
      </Typography>

      <div>
        <Cell>
          <Typography variant="h1">Page Header (h1)</Typography>
          <Typography variant="h2">Page Subheader (h2)</Typography>
          <Typography variant="h3">Card Header (h3)</Typography>
          <Typography variant="h4">Section Header (h4)</Typography>
          <Typography variant="h5">Minor Header (h5)</Typography>
          <Typography variant="h6">Minor Subheader (h6)</Typography>

          <Typography variant="body1">Main Text (body1)</Typography>
          <Typography variant="body2">Main Text (body2)</Typography>

          <Typography variant="button">Button Text</Typography>
          <Typography variant="caption">Caption Text</Typography>
        </Cell>
      </div>
    </div>
  );
};
export const Default: Story = () => <DefaultStory />;

export default {
  title: "Typography",
  decorators: [Decorator, GuideDecorator],
} as Meta;
