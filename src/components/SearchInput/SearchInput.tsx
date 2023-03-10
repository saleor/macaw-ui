import { forwardRef, InputHTMLAttributes } from "react";
import { classNames } from "~/utils";
import { Box } from "../Box";
import { SearchIcon } from "../Icons";
import {
  InputContainerVariants,
  inputContainer,
  input,
  searchIcon,
} from "./SearchInput.css";

type SearchInputProps = InputContainerVariants &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size"
  >;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ id, className, size, ...props }, ref) => {
    return (
      <Box id={id} className={classNames(inputContainer({ size }), className)}>
        <SearchIcon className={searchIcon()} />
        <Box as="input" className={input()} ref={ref} type="text" {...props} />
      </Box>
    );
  }
);

SearchInput.displayName = "SearchInput";
