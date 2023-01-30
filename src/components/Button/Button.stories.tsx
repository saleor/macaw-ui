import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReactNode } from "react";
import { Button, ButtonProps } from "./Button";
import { Box } from "../Box";
import { RemoveIcon, SearchIcon } from "../Icons";

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
        Button
      </Button>
      <Button variant="primary" size="md" {...props}>
        Button
      </Button>
      <Button variant="primary" size="sm" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="lg" {...props}>
        Button
      </Button>
      <Button variant="secondary" size="md" {...props}>
        Button
      </Button>
      <Button variant="secondary" size="sm" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="lg" {...props}>
        Button
      </Button>
      <Button variant="tertiary" size="md" {...props}>
        Button
      </Button>
      <Button variant="tertiary" size="sm" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
  </>
);

const IconButtonVariants = () => (
  <>
    <ButtonSetWrapper>
      <Button fixedWidth variant="primary" size="lg">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="primary" size="md">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="primary" size="sm">
        <RemoveIcon />
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button fixedWidth variant="secondary" size="lg">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="secondary" size="md">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="secondary" size="sm">
        <RemoveIcon />
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button fixedWidth variant="tertiary" size="lg">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="tertiary" size="md">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="tertiary" size="sm">
        <RemoveIcon />
      </Button>
    </ButtonSetWrapper>
  </>
);

const TextIconButtonVariants = (props: Omit<ButtonProps, "children">) => (
  <>
    <ButtonSetWrapper>
      <Button variant="primary" size="lg" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="primary" size="md" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="primary" size="sm" {...props}>
        <SearchIcon size="xsmall" />
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="lg" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="secondary" size="md" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="secondary" size="sm" {...props}>
        <SearchIcon size="xsmall" />
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="lg" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="tertiary" size="md" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="tertiary" size="sm" {...props}>
        <SearchIcon size="xsmall" />
        Button
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
