import { DataAttributes } from "~/components/types";
import { classNames } from "~/utils";

import { Box } from "../../Box";
import { Text } from "../../Text";

import { storeAvatar, StoreAvatarVariants } from "./Store.css";

type InitialsAvatarProps = StoreAvatarVariants &
  DataAttributes & {
    className?: string;
    initials: string;
  };

type ImageAvatarProps = StoreAvatarVariants &
  DataAttributes & {
    className?: string;
    src: string;
  };

export const Store = (props: InitialsAvatarProps | ImageAvatarProps) => {
  if ("initials" in props) {
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
  }

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
};
