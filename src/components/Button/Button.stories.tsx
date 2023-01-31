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
      <Button variant="primary" size="large" {...props}>
        Button
      </Button>
      <Button variant="primary" size="medium" {...props}>
        Button
      </Button>
      <Button variant="primary" size="small" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="large" {...props}>
        Button
      </Button>
      <Button variant="secondary" size="medium" {...props}>
        Button
      </Button>
      <Button variant="secondary" size="small" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="large" {...props}>
        Button
      </Button>
      <Button variant="tertiary" size="medium" {...props}>
        Button
      </Button>
      <Button variant="tertiary" size="small" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
  </>
);

const IconButtonVariants = () => (
  <>
    <ButtonSetWrapper>
      <Button fixedWidth variant="primary" size="large">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="primary" size="medium">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="primary" size="small">
        <RemoveIcon />
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button fixedWidth variant="secondary" size="large">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="secondary" size="medium">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="secondary" size="small">
        <RemoveIcon />
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button fixedWidth variant="tertiary" size="large">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="tertiary" size="medium">
        <RemoveIcon />
      </Button>
      <Button fixedWidth variant="tertiary" size="small">
        <RemoveIcon />
      </Button>
    </ButtonSetWrapper>
  </>
);

const TextIconButtonVariants = (props: Omit<ButtonProps, "children">) => (
  <>
    <ButtonSetWrapper>
      <Button variant="primary" size="large" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="primary" size="medium" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="primary" size="small" {...props}>
        <SearchIcon size="xsmall" />
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="large" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="secondary" size="medium" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="secondary" size="small" {...props}>
        <SearchIcon size="xsmall" />
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="large" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="tertiary" size="medium" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="tertiary" size="small" {...props}>
        <SearchIcon size="xsmall" />
        Button
      </Button>
    </ButtonSetWrapper>
  </>
);

export const Template: ComponentStory<typeof Button> = () => (
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
