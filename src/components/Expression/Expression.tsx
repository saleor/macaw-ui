import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box } from "../Box";

// import { button, ButtonVariants } from "./Button.css";

const Condition = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Box color="textBrandSubdued" fontWeight="bodySmall" paddingX={4}>
          Condition
        </Box>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const OperandDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Box>OperandDropdown</Box>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>operand 1</DropdownMenu.Item>
          <DropdownMenu.Item>operand 1</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const OperandAutocomplete = () => {
  return <Box>OperandAutocomplete</Box>;
};

const OperandText = () => {
  return (
    <Box
      as="input"
      type="text"
      borderWidth={0}
      padding={0}
      color="textNeutralDefault"
      fontSize="bodySmall"
    />
  );
};

const OperandNumber = () => {
  return (
    <Box>
      <Box as="span">$</Box>
      <Box
        as="input"
        type="number"
        borderWidth={0}
        padding={0}
        color="textNeutralDefault"
        fontSize="bodySmall"
      />
    </Box>
  );
};

const OperandRange = () => {
  return (
    <Box display="flex">
      <OperandNumber />
      <Box as="span" paddingX={5}>
        -
      </Box>
      <OperandNumber />
    </Box>
  );
};

interface ExpressionProps {
  children: ReactNode;
}

export const Expression = ({ children }: ExpressionProps) => {
  return (
    <Box
      display="flex"
      backgroundColor="surfaceNeutralPlain"
      borderWidth={1}
      borderStyle="solid"
      borderColor="neutralPlain"
      boxShadow="interactiveDefaultFocused"
      color="textNeutralDefault"
      fontFamily="body"
      fontSize="bodySmall"
      paddingY={3}
      paddingX={3}
      borderRadius={3}
    >
      {children}
    </Box>
  );
};

Expression.Condition = Condition;
Expression.OperandDropdown = OperandDropdown;
Expression.OperandAutocomplete = OperandAutocomplete;
Expression.OperandText = OperandText;
Expression.OperandNumber = OperandNumber;
Expression.OperandRange = OperandRange;

Expression.displayName = "Expression";
