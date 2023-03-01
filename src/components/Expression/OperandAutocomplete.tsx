import { Box } from "../Box";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// import { Dropdown, DropdownItem } from "./Dropdown";
import {
  input as inputStyles,
  dropdownContent as dropdownContentStyles,
} from "./Expression.css";
import React, { useEffect, useRef, useState } from "react";

export const OperandAutocomplete = ({ children }) => {
  const inputRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);


  const handleChange = (evt) => {
    setValue(evt.target.value)

  } 

  const handleKeyDown = (evt) => {
    // evt.preventDefault()
    setOpen(true)
    setValue(v => v + 10)


    // evt.target.focus()
    // console.log(evt.target)
    // inputRef.current.focus();
  }


  const handleClose = () => {
    // setOpen(false)
  }


  const test = () => {
    console.log('test handler')
    // setOpen(false)
  }

  console.log('render')

  return (
    <Box id="container-patch">
      <Box
        as="input"
        type="text"
        className={inputStyles()}
        onKeyDown={handleKeyDown}
        // __width={`${20 + value}px`}
        // onChange={handleChange}
        // value={value}
        ref={inputRef}
      />
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <Box as="div" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal forceMount>
          <DropdownMenu.Content align="start" className={dropdownContentStyles} alignOffset={value}>
            {children}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </Box>

  );
};