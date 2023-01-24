import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { Box } from "../Box";
import { RemoveIcon, SearchIcon } from "../Icons";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const TextButtonVariants = () => (
  <>
    <ButtonSet variant="primary">Refund</ButtonSet>
    <ButtonSet variant="secondary">Refund</ButtonSet>
    <ButtonSet variant="tertiary">Refund</ButtonSet>
  </>
);

const IconButtonVariants = () => (
  <>
    <ButtonSet icon variant="primary">
      <RemoveIcon color="iconNeutralContrasted" />
    </ButtonSet>
    <ButtonSet icon variant="secondary">
      <RemoveIcon />
    </ButtonSet>
    <ButtonSet icon variant="tertiary">
      <RemoveIcon />
    </ButtonSet>
  </>
);

const DisabledButtonVariants = () => (
  <>
    <ButtonSet disabled variant="primary">
      Disabled
    </ButtonSet>
    <ButtonSet disabled variant="secondary">
      Disabled
    </ButtonSet>
    <ButtonSet disabled variant="tertiary">
      Disabled
    </ButtonSet>
  </>
);

const TextIconButtonVariants = () => (
  <>
    <ButtonSet variant="primary">
      <SearchIcon color="iconNeutralContrasted" /> Search
    </ButtonSet>
    <ButtonSet variant="secondary">
      <SearchIcon /> Search
    </ButtonSet>
    <ButtonSet variant="tertiary">
      <SearchIcon /> Search
    </ButtonSet>
  </>
);

const ButtonSet = ({ children, ...args }: ButtonProps) => (
  <Box
    display="flex"
    flexDirection="column"
    placeItems="center"
    gap={4}
    marginX={6}
  >
    <Button size="lg" {...args}>
      {children}
    </Button>
    <Button size="md" {...args}>
      {children}
    </Button>
    <Button size="sm" {...args}>
      {children}
    </Button>
  </Box>
);

const Template: ComponentStory<typeof Button> = () => (
  <>
    <Box display="flex" flexDirection="row" marginBottom={10}>
      <TextButtonVariants />
      <IconButtonVariants />
    </Box>
    <Box display="flex" flexDirection="row">
      <DisabledButtonVariants />
      <TextIconButtonVariants />
    </Box>
  </>
);

export const Default = Template.bind({});
