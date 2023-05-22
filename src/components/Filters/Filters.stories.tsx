import { Meta, StoryObj } from "@storybook/react";
import { Filters } from "./index";

const meta: Meta<typeof Filters> = {
  title: "Components / Filters",
  tags: ["autodocs"],
  component: Filters,
};

export default meta;
type Story = StoryObj<typeof Filters>;

const value = [
  {
    type: "operator",
    value: "where",
    label: "Where",
  },
  {
    type: "row",
    left: {
      name: "price",
      value: "price",
      options: [
        { value: "price", label: "Price" },
        { value: "category", label: "Category" },
        { value: "rating", label: "Rating" },
        { value: "discount", label: "Discount" },
      ],
    },
    condition: {
      options: [
        { value: "input", label: "is" },
        { value: "range", label: "is between" },
        { value: "input", label: "greater than" },
      ],
      value: "input",
    },
    right: {
      type: "input",
      value: 3.14,
    },
  },
  {
    type: "operator",
    value: "and",
    label: "And",
  },
  {
    type: "row",
    left: {
      name: "category",
      value: "category",
      options: [
        { value: "price", label: "Price" },
        { value: "category", label: "Categories" },
        { value: "rating", label: "Rating" },
        { value: "discount", label: "Discount" },
      ],
    },
    condition: {
      options: [{ value: "multiselect", label: "are" }],
      value: "multiselect",
    },
    right: {
      type: "multiselect",
      value: [],
      options: [
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
      ],
    },
  },
  {
    type: "operator",
    value: "or",
    label: "Or",
  },
  {
    type: "row",
    left: {
      name: "rating",
      value: "rating",
      options: [
        { value: "price", label: "Price" },
        { value: "category", label: "Categories" },
        { value: "rating", label: "Rating" },
        { value: "discount", label: "Discount" },
      ],
    },
    condition: {
      options: [{ value: "combobox", label: "is" }],
      value: "combobox",
    },
    right: {
      type: "combobox",
      value: "",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
      ],
    },
  },
  {
    type: "operator",
    value: "and",
    label: "And",
  },
  {
    type: "row",
    left: {
      name: "discount",
      value: "discount",
      options: [
        { value: "price", label: "Price" },
        { value: "category", label: "Categories" },
        { value: "rating", label: "Rating" },
        { value: "discount", label: "Discount" },
      ],
    },
    condition: {
      options: [{ value: "select", label: "is" }],
      value: "select",
    },
    right: {
      type: "select",
      value: [],
      options: [
        { value: "100%", label: "100%" },
        { value: "50%", label: "50%" },
      ],
    },
  },
];

export const Default: Story = {
  args: {
    value,
    onChange: (event) => console.log(event),
  },
};
