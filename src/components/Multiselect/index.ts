export * from "./Static";
export * from "./Dynamic";

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  NoOptions as MultiselectNoOptions,
  NoOptions as DynamicMultiselectNoOptions,
} from "../BaseSelect/NoOptions";
