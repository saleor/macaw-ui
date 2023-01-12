import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Meta } from "@storybook/react";
import React from "react";

import { Button, DialogHeader, DialogTable, ScrollShadow } from "../src";
import {
  isScrolledToBottom,
  isScrolledToTop,
  useElementScroll,
} from "../src/tools";
import employees from "./__fixtures__/dialogs.json";

export const Info: React.FC = () => (
  <Dialog open fullWidth maxWidth="sm">
    <DialogHeader onClose={() => undefined}>Info Dialog</DialogHeader>
    <DialogContent>
      <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum
        risus non metus auctor laoreet.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" variant="primary">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export const WithOverflowTable: React.FC = () => {
  const { anchor, position, setAnchor } = useElementScroll();
  // isScrolledToTop can be undefined which is falsy, but we don't want to
  // display shadow then
  const topShadow = isScrolledToTop(anchor, position, 20) === false;
  const bottomShadow = isScrolledToBottom(anchor, position, 20) === false;

  return (
    <Dialog open maxWidth={false}>
      <ScrollShadow show={topShadow} variant="top">
        <DialogHeader onClose={() => undefined}>Employee List</DialogHeader>
      </ScrollShadow>
      <DialogTable ref={setAnchor}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </DialogTable>
      <ScrollShadow show={bottomShadow} variant="bottom">
        <DialogActions>
          <Button color="primary" variant="primary">
            OK
          </Button>
        </DialogActions>
      </ScrollShadow>
    </Dialog>
  );
};

export default {
  title: "Dialogs",
} as Meta;
