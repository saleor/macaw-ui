import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode, useEffect, useRef } from "react";
import { sprinkles } from "~/theme";

type Props = {
  children: ReactNode;
};

const DropdownRoot = ({ children }: Props) => {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
};

const Trigger = ({ children }: Props) => {
  return <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>;
};

const Portal = ({ children }: Props) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.getElementById("macaw-ui-root");
    if (container) {
      containerRef.current = container;
    }
  }, []);

  return (
    <DropdownMenu.Portal container={containerRef.current}>
      {children}
    </DropdownMenu.Portal>
  );
};

const Content = ({ children }: Props) => {
  return (
    <DropdownMenu.Content
      // asChild
      className={sprinkles({
        minWidth: "auto",
        backgroundColor: "surfaceNeutralPlain",
        boxShadow: "overlay",
        borderRadius: 2,
        padding: 3,
      })}
      sideOffset={2}
    >
      {children}
    </DropdownMenu.Content>
  );
};

const Item = ({ children }: Props) => {
  return <DropdownMenu.Item asChild>{children}</DropdownMenu.Item>;
};

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger,
  Portal,
  Content,
  Item,
});
