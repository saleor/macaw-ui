import { Checkbox } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { DeleteIcon, IconButton, Pagination } from "..";
import { useListStory } from "../utils/useListStory";

import {
  OffsettedList,
  OffsettedListBody,
  OffsettedListFooter,
  OffsettedListHeader,
  OffsettedListItem,
  OffsettedListItemCell,
} from "./";

export const Default: Story = () => {
  const {
    hasNextPage,
    hasPreviousPage,
    pageData,
    setRowsPerPage,
    nextPage,
    previousPage,
    rowsPerPage,
  } = useListStory();

  return (
    <OffsettedList gridTemplate="1fr 200px" style={{ width: 650 }}>
      <OffsettedListHeader>
        <OffsettedListItem>
          <OffsettedListItemCell>Name</OffsettedListItemCell>
          <OffsettedListItemCell>Calories (per 100g)</OffsettedListItemCell>
        </OffsettedListItem>
      </OffsettedListHeader>
      <OffsettedListBody>
        {pageData.map((dataRow) => (
          <OffsettedListItem>
            <OffsettedListItemCell>{dataRow.name}</OffsettedListItemCell>
            <OffsettedListItemCell>{`${dataRow.calories} kcal`}</OffsettedListItemCell>
          </OffsettedListItem>
        ))}
      </OffsettedListBody>
      <OffsettedListFooter>
        <OffsettedListItemCell>
          <Pagination
            choices={[1, 2, 3]}
            onRowNumberUpdate={setRowsPerPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            labels={{ noOfRows: "No. of rows:" }}
            onNextPage={nextPage}
            onPreviousPage={previousPage}
            rowNumber={rowsPerPage}
          />
        </OffsettedListItemCell>
      </OffsettedListFooter>
    </OffsettedList>
  );
};

export const WithActions: Story = () => {
  const { data, pageData, selected, isRowSelected, toggleAll, toggleRow } =
    useListStory(10);

  return (
    <OffsettedList gridTemplate="48px 1fr 200px 48px" style={{ width: 650 }}>
      <OffsettedListHeader>
        {selected.length > 0 ? (
          <OffsettedListItem>
            <OffsettedListItemCell>
              <Checkbox
                checked={selected.length === data.length}
                indeterminate={selected.length !== data.length}
                onChange={toggleAll}
              />
            </OffsettedListItemCell>
            <OffsettedListItemCell colSpan={2} />
            <OffsettedListItemCell>
              <IconButton variant="secondary" hoverOutline>
                <DeleteIcon />
              </IconButton>
            </OffsettedListItemCell>
          </OffsettedListItem>
        ) : (
          <OffsettedListItem>
            <OffsettedListItemCell />
            <OffsettedListItemCell>Name</OffsettedListItemCell>
            <OffsettedListItemCell>Calories (per 100g)</OffsettedListItemCell>
            <OffsettedListItemCell />
          </OffsettedListItem>
        )}
      </OffsettedListHeader>
      <OffsettedListBody>
        {pageData.map((dataRow) => (
          <OffsettedListItem>
            <OffsettedListItemCell>
              <Checkbox
                checked={isRowSelected(dataRow.name)}
                onChange={() => toggleRow(dataRow.name)}
              />
            </OffsettedListItemCell>
            <OffsettedListItemCell>{dataRow.name}</OffsettedListItemCell>
            <OffsettedListItemCell>{`${dataRow.calories} kcal`}</OffsettedListItemCell>
            <OffsettedListItemCell>
              <IconButton variant="secondary" hoverOutline>
                <DeleteIcon />
              </IconButton>
            </OffsettedListItemCell>
          </OffsettedListItem>
        ))}
      </OffsettedListBody>
    </OffsettedList>
  );
};

export default {
  title: "Lists / Offsetted List",
} as Meta;
