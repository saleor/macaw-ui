import * as RadioGroup from "@radix-ui/react-radio-group";
import { sprinkles } from "~/theme";

import { Box } from "../Box";
import { indicator, item } from "./RadioGroup.css";

export const RadioGroupItem = () => (
  <RadioGroup.Root
    className={sprinkles({
      display: "flex",
      flexDirection: "column",
      gap: 4,
    })}
  >
    <Box display="flex" alignItems="center" gap={5}>
      <RadioGroup.Item className={item} value="default" id="r1">
        <RadioGroup.Indicator className={indicator} asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#fff" />
          </svg>
        </RadioGroup.Indicator>
      </RadioGroup.Item>
      <label className="Label" htmlFor="r1">
        Default
      </label>
    </Box>
  </RadioGroup.Root>
);
