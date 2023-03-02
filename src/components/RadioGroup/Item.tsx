import * as RadioGroup from "@radix-ui/react-radio-group";

import { Box } from "../Box";
import { indicator, item } from "./RadioGroup.css";

export const RadioGroupItem = ({
  value,
  id,
  children,
}: {
  value: string;
  id: string;
  children: React.ReactNode;
}) => (
  <Box display="flex" alignItems="center" gap={5}>
    <RadioGroup.Item className={item} value={value} id={id}>
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
    <label className="Label" htmlFor={id}>
      {children}
    </label>
  </Box>
);
