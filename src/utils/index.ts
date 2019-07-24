export function maybe<T>(exp: () => T): T | undefined;
export function maybe<T>(exp: () => T, d: T): T;
export function maybe(exp: any, d?: any) {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
}

export function renderCollection<T>(
  collection: T[],
  renderItem: (
    item: T | undefined,
    index: number | undefined,
    collection: T[]
  ) => any,
  renderEmpty?: (collection: T[]) => any
) {
  if (collection === undefined) {
    return renderItem(undefined, undefined, collection);
  }
  if (collection.length === 0) {
    return !!renderEmpty ? renderEmpty(collection) : null;
  }
  return collection.map(renderItem);
}
