import { type ReactNode } from "react";
import { Box, Text } from "~/components";
import { isReactText } from "~/utils";
import { appLayoutBoxRecipe, appLayoutTextRecipe } from "./AppLayout.css";

export const AppLayout = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={9}
      marginX="auto"
      __maxWidth={1156}
      width="100%"
      paddingTop={10}
      __paddingBottom="20rem"
    >
      <Box display="flex" flexDirection="column" rowGap={2}>
        <Text as="h1" variant="hero" size="medium">
          {title}
        </Text>
        {isReactText(description) ? (
          <Text as="p" variant="body" size="medium">
            {description}
          </Text>
        ) : (
          description
        )}
      </Box>
      {children}
    </Box>
  );
};

export const AppLayoutRow = ({
  title,
  description,
  children,
  disabled = false,
  error = false,
}: {
  title: string;
  description?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  children: ReactNode;
}) => {
  return (
    <Box display="grid" className={appLayoutBoxRecipe({ error, disabled })}>
      <Box display="flex" flexDirection="column" rowGap={10}>
        <Text
          as="h2"
          className={appLayoutTextRecipe({ error, disabled })}
          size="large"
          variant="heading"
        >
          {title}
        </Text>
        {isReactText(description) ? (
          <Text
            as="p"
            className={appLayoutTextRecipe({ error, disabled })}
            variant="body"
            size="medium"
          >
            {description}
          </Text>
        ) : (
          <Box display="flex" flexDirection="column" rowGap={2}>
            {description}
          </Box>
        )}
      </Box>
      <Box display="flex" flexDirection="column" rowGap={10}>
        {children}
      </Box>
    </Box>
  );
};
