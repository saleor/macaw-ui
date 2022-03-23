import { Typography } from "@material-ui/core";
import { Story } from "@storybook/react";

import { Chip, ChipLabels, ChipProps } from "../src/Chip";
import { light, makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "../src/utils/guideStyles";
import { Cell } from "./utils/Cell";

const labels: ChipLabels = {
  a11yRemove: "Remove this item",
};

const props: ChipProps = {
  labels,
  children: "Chip",
};

const useExampleStyles = makeStyles(() => ({
  oneliner: {
    maxWidth: "190px",
  },
}));

const DefaultStory: React.FC = () => {
  const guideClasses = useGuideStyles();
  const exampleClasses = useExampleStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Chips
      </Typography>

      <div className={guideClasses.grid}>
        <div>
          <Cell>
            <Chip {...props}>Chip</Chip>
            <Chip {...props} removable>
              Removable
            </Chip>
            <Chip {...props} oneline className={exampleClasses.oneliner}>
              Chip with very long text. Like veeeeeeeery long
            </Chip>
          </Cell>
        </div>
        <div>
          <Cell>
            <Chip {...props} movable>
              Movable
            </Chip>
            <Chip {...props} movable removable>
              Movable + removable
            </Chip>
          </Cell>
        </div>
        <div>
          <Cell>
            <Chip {...props} swatch={light.success.mid}>
              Swatch
            </Chip>
            <Chip {...props} swatch={light.success.mid} removable>
              Swatch + removable
            </Chip>
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
