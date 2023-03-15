import { ComponentMeta } from "@storybook/react";
import { ProductsIcons, TableEditIcon } from "../Icons";
import { Box } from "../Box";
import { Switch } from ".";

export default {
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default = () => (
  <Box display="flex" flexDirection="column" gap={4}>
    <Switch defaultValue="1">
      <Switch.Item id="1" value="1">
        <TableEditIcon size="medium" />
      </Switch.Item>
      <Switch.Item id="2" value="2">
        <ProductsIcons size="medium" />
      </Switch.Item>
    </Switch>
    <Switch defaultValue="2">
      <Switch.Item id="1" value="1" disabled>
        <TableEditIcon size="medium" />
      </Switch.Item>
      <Switch.Item id="2" value="2" disabled>
        <ProductsIcons size="medium" />
      </Switch.Item>
    </Switch>
  </Box>
);
