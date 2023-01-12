import type { MutableRefObject, Ref } from "react";

export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref !== null && ref !== undefined) {
        // ref.current is typed as readonly
        (ref as MutableRefObject<T | null>).current = node;
      }
    }
  };
}
