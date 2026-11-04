// Server Component: imports macaw-ui directly, without "use client"
// Dotted parts of client components (Popover.Trigger) are undefined here, so this uses their flat exports
// (PopoverTrigger). Dotted parts of server components (List.Item, Avatar.User) work as usual.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerButton,
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  Combobox,
  Divider,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DynamicCombobox,
  DynamicMultiselect,
  Input,
  List,
  ListItemGroupTrigger,
  Modal,
  ModalClose,
  ModalContent,
  ModalTrigger,
  Multiselect,
  Paragraph,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  RangeInput,
  SearchInput,
  Select,
  SelectNoOptions,
  Skeleton,
  Spinner,
  Switch,
  SwitchItem,
  Text,
  Textarea,
  Toggle,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@saleor/macaw-ui";

import { Section } from "./section";

const options = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
];

export default function Page() {
  return (
    <Box display="flex" flexDirection="column" padding={6}>
      <Section name="Avatar">
        <Avatar.User initials="UA" />
        <Avatar.Store initials="SA" />
      </Section>
      <Section name="Box">
        <Box>Box content</Box>
      </Section>
      <Section name="Button">
        <Button>Button</Button>
      </Section>
      <Section name="Checkbox">
        <Checkbox defaultChecked>Checkbox</Checkbox>
      </Section>
      <Section name="Chip">
        <Chip>Chip</Chip>
      </Section>
      <Section name="Combobox">
        <Combobox label="Combobox" options={options} value={options[0]} />
      </Section>
      <Section name="Divider">
        <Divider />
      </Section>
      <Section name="DropdownButton">
        <DropdownButton>Dropdown button</DropdownButton>
      </Section>
      <Section name="DynamicCombobox">
        <DynamicCombobox
          label="Dynamic combobox"
          options={options}
          value={null}
        />
      </Section>
      <Section name="DynamicMultiselect">
        <DynamicMultiselect
          label="Dynamic multiselect"
          options={options}
          value={[]}
        />
      </Section>
      <Section name="Input">
        <Input label="Input" defaultValue="Input value" />
      </Section>
      <Section name="List">
        <List>
          <List.Item>
            <Text>List item</Text>
          </List.Item>
          <List.Divider />
        </List>
      </Section>
      <Section name="Multiselect">
        <Multiselect label="Multiselect" options={options} value={[]} />
      </Section>
      <Section name="Paragraph">
        <Paragraph>Paragraph</Paragraph>
      </Section>
      <Section name="RangeInput">
        <RangeInput type="number" value={["1", "2"]} />
      </Section>
      <Section name="SearchInput">
        <SearchInput placeholder="Search input" />
      </Section>
      <Section name="Select">
        <Select label="Select" options={options} value={options[0]} />
      </Section>
      <Section name="Skeleton">
        <Skeleton __width="100px" __height="20px" />
      </Section>
      <Section name="Spinner">
        <Spinner />
      </Section>
      <Section name="Text">
        <Text>Text</Text>
      </Section>
      <Section name="Textarea">
        <Textarea label="Textarea" defaultValue="Textarea value" />
      </Section>
      <Section name="Toggle">
        <Toggle>Toggle</Toggle>
      </Section>
      <Section name="Accordion">
        <Accordion defaultValue="item">
          <AccordionItem value="item">
            <AccordionTrigger>
              <Text>Accordion trigger</Text>
              <AccordionTriggerButton />
            </AccordionTrigger>
            <AccordionContent>Accordion content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
      <Section name="Drawer">
        <Drawer>
          <DrawerTrigger>
            <Button>Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <Text>Drawer content</Text>
          </DrawerContent>
        </Drawer>
      </Section>
      <Section name="Dropdown">
        <Dropdown>
          <DropdownTrigger>
            <Button>Open dropdown</Button>
          </DropdownTrigger>
          <DropdownContent>
            <List>
              <DropdownItem>
                <List.Item>
                  <Text>Dropdown item</Text>
                </List.Item>
              </DropdownItem>
            </List>
          </DropdownContent>
        </Dropdown>
      </Section>
      <Section name="List.ItemGroup">
        <List>
          <List.ItemGroup>
            <ListItemGroupTrigger>
              <Text>List group</Text>
            </ListItemGroupTrigger>
          </List.ItemGroup>
        </List>
      </Section>
      <Section name="Modal">
        <Modal>
          <ModalTrigger>
            <Button>Open modal</Button>
          </ModalTrigger>
          <ModalContent>
            <Box backgroundColor="default1" padding={4}>
              <Text>Modal content</Text>
              <ModalClose>
                <Button>Close modal</Button>
              </ModalClose>
            </Box>
          </ModalContent>
        </Modal>
      </Section>
      <Section name="Popover">
        <Popover>
          <PopoverTrigger>
            <Button>Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box padding={4}>
              <Text>Popover content</Text>
            </Box>
          </PopoverContent>
        </Popover>
      </Section>
      <Section name="RadioGroup">
        <RadioGroup label="Radio group" defaultValue="one">
          <RadioGroupItem value="one" id="radio-one">
            <Text>Radio one</Text>
          </RadioGroupItem>
          <RadioGroupItem value="two" id="radio-two">
            <Text>Radio two</Text>
          </RadioGroupItem>
        </RadioGroup>
      </Section>
      <Section name="SelectNoOptions">
        <Select label="Empty select" options={[]} value={null}>
          <SelectNoOptions>No options</SelectNoOptions>
        </Select>
      </Section>
      <Section name="Switch">
        <Switch defaultValue="one">
          <SwitchItem id="switch-one" value="one">
            Switch one
          </SwitchItem>
          <SwitchItem id="switch-two" value="two">
            Switch two
          </SwitchItem>
        </Switch>
      </Section>
      <Section name="Tooltip">
        <Tooltip>
          <TooltipTrigger>
            <Button>Tooltip trigger</Button>
          </TooltipTrigger>
          <TooltipContent>
            Tooltip content
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </Section>
    </Box>
  );
}
