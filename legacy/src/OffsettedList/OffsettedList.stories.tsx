import Checkbox from "@material-ui/core/Checkbox";
import { Meta, Story } from "@storybook/react";
import React from "react";

import {
  DeleteIcon,
  EditIcon,
  IconButton,
  Pagination,
  useOffsettedListWidths,
} from "..";
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
    <OffsettedList gridTemplate={["1fr", "200px"]} style={{ width: 650 }}>
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
        <OffsettedListItem>
          <OffsettedListItemCell colSpan={2}>
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
        </OffsettedListItem>
      </OffsettedListFooter>
    </OffsettedList>
  );
};

const S: React.FC = () => {
  const { data, pageData, selected, isRowSelected, toggleAll, toggleRow } =
    useListStory(10);
  const { checkbox, actions } = useOffsettedListWidths();

  return (
    <OffsettedList
      gridTemplate={[checkbox, "1fr", "200px", actions(2)]}
      style={{ width: 650 }}
    >
      <OffsettedListHeader>
        {selected.length > 0 ? (
          <OffsettedListItem>
            <OffsettedListItemCell padding="checkbox">
              <Checkbox
                checked={selected.length === data.length}
                indeterminate={selected.length !== data.length}
                onChange={toggleAll}
              />
            </OffsettedListItemCell>
            <OffsettedListItemCell colSpan={2} />
            <OffsettedListItemCell padding="action">
              <IconButton variant="secondary" hoverOutline>
                <EditIcon />
              </IconButton>
              <IconButton variant="secondary" hoverOutline>
                <DeleteIcon />
              </IconButton>
            </OffsettedListItemCell>
          </OffsettedListItem>
        ) : (
          <OffsettedListItem>
            <OffsettedListItemCell padding="checkbox">
              <Checkbox checked={false} onChange={toggleAll} />
            </OffsettedListItemCell>
            <OffsettedListItemCell>Name</OffsettedListItemCell>
            <OffsettedListItemCell>Calories (per 100g)</OffsettedListItemCell>
            <OffsettedListItemCell />
          </OffsettedListItem>
        )}
      </OffsettedListHeader>
      <OffsettedListBody>
        {pageData.map((dataRow) => (
          <OffsettedListItem selected={isRowSelected(dataRow.name)}>
            <OffsettedListItemCell padding="checkbox">
              <Checkbox
                checked={isRowSelected(dataRow.name)}
                onChange={() => toggleRow(dataRow.name)}
              />
            </OffsettedListItemCell>
            <OffsettedListItemCell>{dataRow.name}</OffsettedListItemCell>
            <OffsettedListItemCell>{`${dataRow.calories} kcal`}</OffsettedListItemCell>
            <OffsettedListItemCell padding="action">
              <IconButton variant="secondary" hoverOutline>
                <EditIcon />
              </IconButton>
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

export const WithActions: Story = () => <S />;

export default {
  title: "Lists / Offsetted List",
} as Meta;
