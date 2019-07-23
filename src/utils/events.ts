export interface AnyEvent {
  stopPropagation: () => void;
}
export function stopPropagation(cb: () => void) {
  return (event: AnyEvent) => {
    event.stopPropagation();
    cb();
  };
}
