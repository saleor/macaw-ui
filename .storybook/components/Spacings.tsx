import { Box } from "~/components";
import { useTheme } from "~/theme";

export const SpacingsPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" rowGap={10}>
      {Object.entries(vars.space).map(([key, value]) => {
        return (
          <Box width="100%" key={key}>
            <Box>space-{key}</Box>
            <Box>{value}</Box>
            <Box key={key} __backgroundColor="#e3eaf2" position="relative">
              <Box __width={value} height={10} __backgroundColor="#056dff" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
