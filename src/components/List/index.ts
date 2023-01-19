import { Divider } from "./Divider";
import { Item } from "./Item";
import { ItemGroup } from "./ItemGroup";
import { List as RootList } from "./List";

export const List = Object.assign(RootList, { Item, ItemGroup, Divider });
