export type FormErrors<TKeys extends string> = Partial<Record<TKeys, string>>;

export interface ChangeEvent<TData = any> {
  target: {
    name: string;
    value: TData;
  };
}
