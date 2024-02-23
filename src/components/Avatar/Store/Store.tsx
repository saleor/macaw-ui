import { DataAttributes } from "~/components/types";
import { classNames } from "~/utils";

import { Box, PropsWithBox } from "../../Box";
import { convertSizeToScale, Text } from "../../Text";

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
        data-macaw-ui-component="Avatar.Store"
        {...rest}
      />
    );
  }

  const { size, scheme, className, initials, ...rest } = props;
  return (
    <Box
      className={classNames(storeAvatar({ size, scheme }), className)}
      data-macaw-ui-component="Avatar.Store"
      {...rest}
    >
      <Text
        size={convertSizeToScale(size)}
        color="buttonDefaultPrimary"
        fontWeight="medium"
      >
        {initials}
      </Text>
    </Box>
  );
};

Store.displayName = "Avatar.Store";
