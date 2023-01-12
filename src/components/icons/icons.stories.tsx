import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChervonDownIcon,
  ChervonUpIcon,
  ConfigurationIcon,
  CustomersIcon,
  HomeIcon,
  MarketplaceIcon,
  MenuIcon,
  MoreOptionsIcon,
  OrdersIcon,
  ProductsIcons,
  SellsIcon,
  StorefrontIcon,
  TableEditIcon,
  TranslationsIcon,
  VouchersIcon,
} from "./index";

const defaultComponent = () => (
  <div>
    <ArrowDownIcon />
    <ArrowUpIcon />
    <ChervonDownIcon />
    <ChervonUpIcon />
    <ConfigurationIcon />
    <CustomersIcon />
    <HomeIcon />
    <MarketplaceIcon />
    <MenuIcon />
    <MoreOptionsIcon />
    <OrdersIcon />
    <ProductsIcons />
    <SellsIcon />
    <StorefrontIcon />
    <TableEditIcon />
    <TranslationsIcon />
    <VouchersIcon />
  </div>
);

export default {
  title: "Icons/test",
  omponents: defaultComponent,
};

export const Default = defaultComponent.bind({});
