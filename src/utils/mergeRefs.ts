import type { Ref } from "react";

export function mergeRefs<T>(...refs: Ref<T>[]) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else {
        // ref.current is typed as readonly
        (ref as any).current = node;
      }
    }
  };
}
