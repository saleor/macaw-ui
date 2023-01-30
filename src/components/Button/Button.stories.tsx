import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReactNode } from "react";
import { Button, ButtonProps } from "./Button";
import { Box } from "../Box";
import { RemoveIcon, SearchIcon } from "../Icons";
import { Text } from "../Text";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonSetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      placeItems="center"
      gap={4}
      marginX={6}
    >
      {children}
    </Box>
  );
};

const TextButtonVariants = (props: Omit<ButtonProps, "children">) => (
  <>
    <ButtonSetWrapper>
      <Button variant="primary" size="lg" {...props}>
        <Text variant="button" size="large" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="primary" size="md" {...props}>
        <Text variant="button" size="medium" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="primary" size="sm" {...props}>
        <Text variant="button" size="small" color="inherit">
          Button
        </Text>
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="lg" {...props}>
        <Text variant="button" size="large" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="secondary" size="md" {...props}>
        <Text variant="button" size="medium" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="secondary" size="sm" {...props}>
        <Text variant="button" size="small" color="inherit">
          Button
        </Text>
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="lg" {...props}>
        <Text variant="button" size="large" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="tertiary" size="md" {...props}>
        <Text variant="button" size="medium" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="tertiary" size="sm" {...props}>
        <Text variant="button" size="small" color="inherit">
          Button
        </Text>
      </Button>
    </ButtonSetWrapper>
  </>
);

const IconButtonVariants = () => (
  <>
    <ButtonSetWrapper>
      <Button fixedWidth variant="primary" size="lg">
        <RemoveIcon color="inherit" />
      </Button>
      <Button fixedWidth variant="primary" size="md">
        <RemoveIcon color="inherit" />
      </Button>
      <Button fixedWidth variant="primary" size="sm">
        <RemoveIcon color="inherit" />
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button fixedWidth variant="secondary" size="lg">
        <RemoveIcon color="inherit" />
      </Button>
      <Button fixedWidth variant="secondary" size="md">
        <RemoveIcon color="inherit" />
      </Button>
      <Button fixedWidth variant="secondary" size="sm">
        <RemoveIcon color="inherit" />
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button fixedWidth variant="tertiary" size="lg">
        <RemoveIcon color="inherit" />
      </Button>
      <Button fixedWidth variant="tertiary" size="md">
        <RemoveIcon color="inherit" />
      </Button>
      <Button fixedWidth variant="tertiary" size="sm">
        <RemoveIcon color="inherit" />
      </Button>
    </ButtonSetWrapper>
  </>
);

const TextIconButtonVariants = (props: Omit<ButtonProps, "children">) => (
  <>
    <ButtonSetWrapper>
      <Button variant="primary" size="lg" {...props}>
        <SearchIcon color="inherit" />
        <Text variant="button" size="large" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="primary" size="md" {...props}>
        <SearchIcon color="inherit" size="small" />
        <Text variant="button" size="medium" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="primary" size="sm" {...props}>
        <SearchIcon color="inherit" size="xsmall" />
        <Text variant="button" size="small" color="inherit">
          Button
        </Text>
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="lg" {...props}>
        <SearchIcon color="inherit" />
        <Text variant="button" size="large" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="secondary" size="md" {...props}>
        <SearchIcon color="inherit" size="small" />
        <Text variant="button" size="medium" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="secondary" size="sm" {...props}>
        <SearchIcon color="inherit" size="xsmall" />
        <Text variant="button" size="small" color="inherit">
          Button
        </Text>
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="lg" {...props}>
        <SearchIcon color="inherit" />
        <Text variant="button" size="large" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="tertiary" size="md" {...props}>
        <SearchIcon color="inherit" size="small" />
        <Text variant="button" size="medium" color="inherit">
          Button
        </Text>
      </Button>
      <Button variant="tertiary" size="sm" {...props}>
        <SearchIcon color="inherit" size="xsmall" />
        <Text variant="button" size="small" color="inherit">
          Button
        </Text>
      </Button>
    </ButtonSetWrapper>
  </>
);

const Template: ComponentStory<typeof Button> = () => (
  <>
    <Box display="flex" flexDirection="row" marginBottom={10}>
      <TextButtonVariants />
      <IconButtonVariants />
    </Box>
    <Box display="flex" flexDirection="row">
      <TextButtonVariants disabled />
      <TextIconButtonVariants />
    </Box>
  </>
);

export const Default = Template.bind({});
