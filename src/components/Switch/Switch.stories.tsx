import { ComponentMeta } from "@storybook/react";
import { ProductsIcons, TableEditIcon } from "../Icons";
import { Switch } from ".";

export default {
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default = () => (
  <Switch defaultValue="1">
    <Switch.Item id="1" value="1">
      <TableEditIcon size="medium" />
    </Switch.Item>
    <Switch.Item id="2" value="2">
      <ProductsIcons size="medium" />
    </Switch.Item>
  </Switch>
);
