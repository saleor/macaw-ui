import { createBox } from "@dessert-box/react";
import { ComponentProps } from "react";

import { sprinkles } from "~/theme";

export const Box = createBox({ atoms: sprinkles });

export type PropsWithBox<T> = ComponentProps<typeof Box> & T;
