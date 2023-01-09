import { Meta, Story } from "@storybook/react";
import React from "react";
import { GuideDecorator } from "../utils/Decorator";
import { Accordion, AccordionSummary } from "./Accordion";


export const WithContent: Story = () => (
  <Accordion>
    <AccordionSummary>item 1</AccordionSummary>
    <div>test</div>
  </Accordion>
);

export default {
  title: "Accordion",
  decorators: [GuideDecorator],
} as Meta;
