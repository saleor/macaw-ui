import { Typography } from "@material-ui/core";
import { Story } from "@storybook/react";

import { Chip, ChipMovable, ChipRemovable, ChipSwatch } from "../src/Chip";
import { light } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
import { Cell } from "./utils/Cell";

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
            <Chip>Chip</Chip>
            <ChipRemovable onRemove={() => {}}>Removable</ChipRemovable>
          </Cell>
        </div>
        <div>
          <Cell>
            <ChipMovable>Movable</ChipMovable>
          </Cell>
        </div>
        <div>
          <Cell>
            <ChipSwatch color={light.success.mid}>Swatch</ChipSwatch>
            <ChipSwatch color={light.success.mid} onRemove={() => {}}>
              Swatch Removable
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
