import { Box } from "~/components";
import { vars } from "~/theme/contract.css";
import { useVarValues } from "~/utils";

export const SpacingsPresentation = () => {
  const { getVarValue } = useVarValues();

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" rowGap={10}>
      {Object.entries(vars.space).map(([key, value]) => {
        return (
          <Box width="100%" key={key}>
            <Box>space-{key}</Box>
            <Box color="textNeutralPlain">{getVarValue(value)}</Box>
            <Box
              key={key}
              backgroundColor="interactiveBrandHighlightDefault"
              position="relative"
            >
              <Box
                __width={value}
                height={10}
                backgroundColor="interactiveBrandDefault"
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
