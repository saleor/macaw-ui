import { Meta, Story } from "@storybook/react";
import React from "react";

import { PopoverCustom, PopoverCustomProps } from './PopoverCustom'

const props: PopoverCustomProps = {
};

export const Default: Story = () => (
	<>
		<PopoverCustom {...props}>
			<div>
				This is popover custom
			</div>

		</PopoverCustom>
	</>
);

export default {
	title: "PopoverCustom",
} as Meta;
