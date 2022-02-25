import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { DeleteIcon, IconButton, Pagination } from "..";
import { useListStory } from "../utils/useListStory";
import {
  List,
  ListBody,
  ListFooter,
  ListHeader,
  ListItem,
  ListItemCell,
  ListItemCellAction,
  useListWidths,
} from ".";

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
    <Card>
      <CardHeader title="Example List" />
      <List gridTemplate={["1fr", "200px"]}>
        <ListHeader>
          <ListItem>
            <ListItemCell>Name</ListItemCell>
            <ListItemCell>Calories (per 100g)</ListItemCell>
          </ListItem>
        </ListHeader>
        <ListBody>
          {pageData.map((dataRow) => (
            <ListItem key={dataRow.name}>
              <ListItemCell>{dataRow.name}</ListItemCell>
              <ListItemCell>{`${dataRow.calories} kcal`}</ListItemCell>
            </ListItem>
          ))}
        </ListBody>
        <ListFooter>
          <ListItem>
            <ListItemCell colSpan={10}>
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
            </ListItemCell>
          </ListItem>
        </ListFooter>
      </List>
    </Card>
  );
};

const StoryWrapper: React.FC = () => {
  const { data, pageData, selected, isRowSelected, toggleAll, toggleRow } =
    useListStory(10);
  const { checkbox, actions } = useListWidths();

  return (
    <Card>
      <CardHeader title="Example List" />
      <List gridTemplate={[checkbox, "1fr", "200px", actions(1)]}>
        <ListHeader>
          {selected.length > 0 ? (
            <ListItem>
              <ListItemCell padding="checkbox">
                <Checkbox
                  checked={selected.length === data.length}
                  indeterminate={selected.length !== data.length}
                  onChange={toggleAll}
                />
              </ListItemCell>
              <ListItemCell colSpan={2} />
              <ListItemCell padding="action">
                <IconButton variant="secondary" hoverOutline>
                  <DeleteIcon />
                </IconButton>
              </ListItemCell>
            </ListItem>
          ) : (
            <ListItem>
              <ListItemCell />
              <ListItemCell>Name</ListItemCell>
              <ListItemCell>Calories (per 100g)</ListItemCell>
              <ListItemCell />
            </ListItem>
          )}
        </ListHeader>
        <ListBody>
          {pageData.map((dataRow) => (
            <ListItem selected={isRowSelected(dataRow.name)} key={dataRow.name}>
              <ListItemCell padding="checkbox">
                <ListItemCellAction>
                  <Checkbox
                    checked={isRowSelected(dataRow.name)}
                    onChange={() => toggleRow(dataRow.name)}
                  />
                </ListItemCellAction>
              </ListItemCell>
              <ListItemCell>{dataRow.name}</ListItemCell>
              <ListItemCell>{`${dataRow.calories} kcal`}</ListItemCell>
              <ListItemCell padding="action">
                <ListItemCellAction>
                  <IconButton variant="secondary" hoverOutline>
                    <DeleteIcon />
                  </IconButton>
                </ListItemCellAction>
              </ListItemCell>
            </ListItem>
          ))}
        </ListBody>
      </List>
    </Card>
  );
};

export const WithActions: Story = () => <StoryWrapper />;

export default {
  title: "Lists / List",
} as Meta;
