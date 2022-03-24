import { Typography } from "@material-ui/core";
import { Story } from "@storybook/react";

import {
  Chip,
  ChipMovable,
  ChipProps,
  ChipRemovable,
  ChipSwatch,
} from "../src/Chip";
import { light } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
import { Cell } from "./utils/Cell";

const props: ChipProps = {
  children: "Chip",
};

const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Chips
      </Typography>

      <div className={guideClasses.grid}>
        <div>
          <Cell>
            <Chip {...props}>Chip</Chip>
            <ChipRemovable {...props}>Removable</ChipRemovable>
          </Cell>
        </div>
        <div>
          <Cell>
            <ChipMovable {...props}>Movable</ChipMovable>
          </Cell>
        </div>
        <div>
          <Cell>
            <ChipSwatch {...props} color={light.success.mid}>
              Swatch
            </ChipSwatch>
          </Cell>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = () => <DefaultStory />;

export default {
  title: "Chips",
  decorators: [Decorator, GuideDecorator],
};
