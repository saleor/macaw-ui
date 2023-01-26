import { classNames } from "~/utils";

import { Box } from "../../Box";
import { Text } from "../../Text";

import { userAvatar, UserAvatarVariants } from "./User.css";

type InitialsAvatarProps = UserAvatarVariants & {
  className?: string;
  initials: string;
};

type ImageAvatarProps = UserAvatarVariants & {
  className?: string;
  src: string;
};

export const User = (props: InitialsAvatarProps | ImageAvatarProps) => {
  if ("initials" in props) {
    const { size, scheme, className, initials } = props;
    return (
      <Box className={classNames(userAvatar({ size, scheme }), className)}>
        <Text variant="bodyEmp" size={size} color="textNeutralContrasted">
          {initials}
        </Text>
      </Box>
    );
  }

  const { src, size, scheme, className } = props;
  return (
    <Box
      as="img"
      src={src}
      alt="User avatar image"
      className={classNames(userAvatar({ size, scheme }), className)}
    />
  );
};
