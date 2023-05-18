import { Unstyled } from "@storybook/blocks";
import { Box } from "~/components";
import { useTheme } from "~/theme";

export const SpacingsPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Unstyled>
      <Box display="flex" flexDirection="row" flexWrap="wrap" rowGap="s7">
        {Object.entries(vars.space).map(([key, value]) => {
          return (
            <Box width="100%" key={key}>
              <Box __fontSize="14px" __minWidth="100px">
                <Box
                  display="inline-block"
                  color="textNeutralPlain"
                  __fontSize="15px"
                >
                  {key}
                </Box>
                : {value}
              </Box>
              <Box key={key} __backgroundColor="#e3eaf2" position="relative">
                <Box __width={value} height="s7" __backgroundColor="#056dff" />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Unstyled>
  );
};
