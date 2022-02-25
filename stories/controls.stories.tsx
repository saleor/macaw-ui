import {
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
import { Cell } from "./utils/Cell";

const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();
  const [radioValue, setRadioValue] = React.useState("opt1");

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Controls
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        These components can be used in forms or switch application state:
      </Typography>

      <div className={guideClasses.grid}>
        <div>
          <Cell>
            <Checkbox />
            <Checkbox className="Mui-focusVisible" />
            <Checkbox checked />
            <Checkbox disabled />
            <Checkbox checked disabled />
            <Checkbox indeterminate />
          </Cell>
        </div>
        <div>
          <Cell>
            <RadioGroup
              value={radioValue}
              onChange={(event) => setRadioValue(event.target.value)}
              style={{ flexDirection: "row" }}
            >
              <Radio value="opt1" />
              <Radio value="opt2" />
            </RadioGroup>
            <Radio className="Mui-focusVisible" />
            <Radio checked />
            <Radio disabled />
            <Radio checked disabled />
          </Cell>
        </div>
        <div>
          <Cell>
            <Switch />
            <Switch className="Mui-focusVisible" />
            <Switch checked />
            <Switch disabled />
            <Switch checked disabled />
          </Cell>
        </div>
      </div>
    </div>
  );
};
export const Default: Story = () => <DefaultStory />;

export default {
  title: "Controls",
  decorators: [Decorator, GuideDecorator],
} as Meta;
