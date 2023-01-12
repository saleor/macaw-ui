// It's only optimized for esm, cjs will remain fat blob
// Ref https://github.com/formium/tsdx/issues/763
import { throttle } from "lodash";
import { useEffect, useState } from "react";

function getPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset,
  };
}

export function useWindowScroll() {
  const [scroll, setScroll] = useState(getPosition);

  useEffect(() => {
    const handleScroll = throttle(() => setScroll(getPosition()), 100);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
}
