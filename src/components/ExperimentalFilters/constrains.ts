import { Row } from "./types";

export type InternalConstrain = {
  showRemoveButton?: boolean;
  disableLeftOperator?: boolean;
  disableCondition?: boolean;
  disableRightOperator?: boolean;
};

export const extractConstrains = (
  value: Array<Row | string>
): Record<string, InternalConstrain> =>
  value
    .filter((item): item is Row => typeof item !== "string")
    .filter((item) => item.constraint)
    .map((item) => item.constraint)
    .reduce(
      (acc, item) => ({
        ...acc,
        [item?.dependsOn ?? ""]: {
          showRemoveButton: item?.removable,
          disableLeftOperator: item?.disabled?.includes("left"),
          disableCondition: item?.disabled?.includes("condition"),
          disableRightOperator: item?.disabled?.includes("right"),
        },
      }),
      {}
    );

export const getRowConstraint = (
  constrains: Record<string, InternalConstrain>,
  value: string | undefined
) => {
  const possibleConstraint = constrains[value ?? ""];

  return (
    possibleConstraint ?? {
      showRemoveButton: true,
      disableLeftOperator: false,
      disableCondition: false,
      disableRightOperator: false,
    }
  );
};
