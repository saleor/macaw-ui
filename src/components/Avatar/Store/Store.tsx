import { DataAttributes } from "~/components/types";
import { classNames } from "~/utils";

import { Box, PropsWithBox } from "../../Box";
import { Text } from "../../Text";

import { storeAvatar, StoreAvatarVariants } from "./Store.css";

export type StoreAvatarProps = PropsWithBox<
  DataAttributes & {
    className?: string;
    initials?: string;
    src?: string;
  }
> &
  StoreAvatarVariants;

export const Store = (props: StoreAvatarProps) => {
  if ("src" in props) {
    const { src, size, scheme, className, ...rest } = props;
    return (
      <Box
        as="img"
        src={src}
        alt="Store avatar image"
        className={classNames(storeAvatar({ size, scheme }), className)}
        {...rest}
      />
    );
  }

  const { size, scheme, className, initials, ...rest } = props;
  return (
    <Box
      className={classNames(storeAvatar({ size, scheme }), className)}
      {...rest}
    >
      <Text variant="bodyEmp" size={size} color="inherit">
        {initials}
      </Text>
    </Box>
  );
};

Store.displayName = "Avatar.Store";
