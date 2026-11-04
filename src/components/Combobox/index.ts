export * from "./Static";
export * from "./Dynamic";

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  NoOptions as ComboboxNoOptions,
  NoOptions as DynamicComboboxNoOptions,
} from "../BaseSelect/NoOptions";
