import { DataAttributes } from "~/components/types";
import { classNames } from "~/utils";

import { Box, PropsWithBox } from "../../Box";
import { Text } from "../../Text";

import { userAvatar, UserAvatarVariants } from "./User.css";

export type UserAvatarProps = PropsWithBox<
  DataAttributes & {
    className?: string;
    initials?: string;
    src?: string;
  }
> &
  UserAvatarVariants;

export const User = (props: UserAvatarProps) => {
  if ("src" in props) {
    const { src, size, scheme, className, ...rest } = props;
    return (
      <Box
        as="img"
        src={src}
        alt="User avatar image"
        className={classNames(userAvatar({ size, scheme }), className)}
        data-macaw-ui-component="Avatar.User"
        {...rest}
      />
    );
  }

  const { size, scheme, className, initials, ...rest } = props;
  return (
    <Box
      className={classNames(userAvatar({ size, scheme }), className)}
      data-macaw-ui-component="Avatar.User"
      {...rest}
    >
      <Text variant="bodyEmp" size={size} color="default2">
        {initials}
      </Text>
    </Box>
  );
};

User.displayName = "Avatar.User";
