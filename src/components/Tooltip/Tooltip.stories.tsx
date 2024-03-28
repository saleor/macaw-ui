import { Meta, StoryObj } from "@storybook/react";
import * as TooltipP from "@radix-ui/react-tooltip";
import { Button } from "../Button";
import { Tooltip } from "./index";

const meta: Meta<typeof Tooltip> = {
  title: "Components / Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Trigger>
        <Button>Left</Button>
      </Tooltip.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Content side="left">
        Tooltip content
        <Tooltip.Arrow />
      </Tooltip.Content>,
    ],
  },
};

export const RightSide: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Trigger>
        <Button>Right</Button>
      </Tooltip.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Content side="right">
        Tooltip content
        <Tooltip.Arrow />
      </Tooltip.Content>,
    ],
  },
};

export const Top: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Trigger>
        <Button>Top</Button>
      </Tooltip.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Content side="top">
        Tooltip content
        <Tooltip.Arrow />
      </Tooltip.Content>,
    ],
  },
};

export const Bottom: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Trigger>
        <Button>Bottom</Button>
      </Tooltip.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Content side="bottom">
        Tooltip content
        <Tooltip.Arrow />
      </Tooltip.Content>,
    ],
  },
};

export const WithHeading: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Trigger>
        <Button>With heading</Button>
      </Tooltip.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Content side="left">
        <Tooltip.ContentHeading>Heading</Tooltip.ContentHeading>
        Tooltip content
        <Tooltip.Arrow />
      </Tooltip.Content>,
    ],
  },
};

export const WithNoChildren1: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Trigger>
        <Button>With heading</Button>
      </Tooltip.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Tooltip.Content>{null}</Tooltip.Content>,
    ],
  },
};

export const WithNoChildren2 = () => (
  <TooltipP.Provider>
    <TooltipP.Root>
      <TooltipP.Trigger asChild>
        <button className="IconButton">klik</button>
      </TooltipP.Trigger>
      <TooltipP.Portal>
        <TooltipP.Content
          style={{
            borderRadius: "4px",
            padding: "10px 15px",
            fontSize: "15px",
            lineHeight: "1",
            color: "var(--violet-11)",
            backgroundColor: "white",
            boxShadow:
              "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
            userSelect: "none",
            animationDuration: "400ms",
            animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform, opacity",
          }}
          sideOffset={5}
        ></TooltipP.Content>
      </TooltipP.Portal>
    </TooltipP.Root>
  </TooltipP.Provider>
);
