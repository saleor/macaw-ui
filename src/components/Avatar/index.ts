import { Store } from "./Store";
import { User } from "./User";

export type { InitialsStoreAvatarProps, ImageStoreAvatarProps } from "./Store";
export type { InitialsUserAvatarProps, ImageUserAvatarProps } from "./User";

export const Avatar = Object.assign({}, { User, Store });
