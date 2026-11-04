import { Divider } from "./Divider";
import { Item } from "./Item";
import { ItemGroup } from "./ItemGroup";
import { List as RootList } from "./List";

export type { ListProps } from "./List";
export type { ListItemProps } from "./Item";
export type { ListDividerProps } from "./Divider";
export type { ItemGroupRootProps, ItemGroupTriggerProps } from "./ItemGroup";

export const List = Object.assign(RootList, { Item, ItemGroup, Divider });

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export { Item as ListItem, ItemGroup as ListItemGroup, Divider as ListDivider };
export { Trigger as ListItemGroupTrigger } from "./ItemGroup/Trigger";
export { Content as ListItemGroupContent } from "./ItemGroup/Content";
