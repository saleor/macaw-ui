import { type ReactNode } from "react";
import { classNames } from "~/utils";
import * as tableStyles from "./Table.css";

export const Table = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <table className={classNames(tableStyles.table, className)}>{children}</table>
);

export const Thead = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <thead className={classNames(tableStyles.thead, className)}>{children}</thead>
);

export const Tr = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <tr className={classNames(tableStyles.tr, className)}>{children}</tr>;

export const Th = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <th className={classNames(tableStyles.th, className)}>{children}</th>;

export const Tbody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <tbody className={classNames(tableStyles.tbody, className)}>{children}</tbody>
);

export const Td = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => <td className={classNames(tableStyles.td, className)}>{children}</td>;
