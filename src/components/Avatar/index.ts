import { Store } from "./Store";
import { User } from "./User";

export type { StoreAvatarProps } from "./Store";
export type { UserAvatarProps } from "./User";

export const Avatar = Object.assign({}, { User, Store });

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export { User as AvatarUser, Store as AvatarStore };
