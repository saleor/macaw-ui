import { useState } from "react";

export interface UseTableActionHover {
  hover: boolean;
  props: Record<"onMouseLeave" | "onMouseEnter", () => void>;
}

export function useTableActionHover(): UseTableActionHover {
  const [hover, setHover] = useState(true);

  return {
    hover,
    props: {
      onMouseEnter: () => setHover(false),
      onMouseLeave: () => setHover(true),
    },
  };
}
