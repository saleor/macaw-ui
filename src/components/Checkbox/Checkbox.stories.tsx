import { ComponentMeta } from "@storybook/react";

import { useEffect, useState } from "react";
import { DecorativeBox } from "../../../.storybook//DecorativeBox";
import { Box } from "../Box";
import { Text } from "../Text";



import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Components / Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
};

export default meta
type Story = StoryObj<typeof Checkbox>;


export const Primary: Story = {
  args: {
    children: [
      <Text variant="body">Option 1</Text>
    ]
  },
};

export const Checked: Story = {
  args: {
    ...Primary.args,
    defaultChecked: true
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    children: [
      <Text variant="body" color="textNeutralDisabled">Option 1</Text>
    ]
  },
};

export const Errored: Story = {
  args: {
    ...Primary.args,
    error: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Primary.args,
    checked: "indeterminate",
  },
};

const options = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
];


export const BulkCheckboxes: Story = {
  args: {
    // ...Primary.args,
    // checked: "indeterminate",
  },
  render: () => {

    return (
      <Box>
      <Text variant="heading">Bulk checkboxes</Text>
      <Checkbox
        checked={false}
        onCheckedChange={() => {}}
      >
        <Text variant="body">List of options</Text>
      </Checkbox>
        <Box display="flex" flexDirection="column" marginLeft={8} gap={2}>
          {options.map((option, index) => (
            <Checkbox
              key={option.name}
              name={option.name}
              value={option.name}
              checked={false}
              onCheckedChange={() => {}}
            >
              <Text variant="body">{option.name}</Text>
            </Checkbox>
          ))}
        </Box>
      </Box>
    )
  }
};


// export const Default = () => {
//   const [topButtonState, setTopButtonState] =
//     useState<CheckedState>("indeterminate");

//   const [buttonsState, setButtonsState] = useState([false, true, false]);

//   const handleChange = (position: number) => {
//     const updatedCheckedState = buttonsState.map((item, index) =>
//       index === position ? !item : item
//     );
//     setButtonsState(updatedCheckedState);
//   };

//   useEffect(() => {
//     if (buttonsState.every((e) => e)) {
//       setTopButtonState(true);
//     } else if (buttonsState.every((e) => !e)) {
//       setTopButtonState(false);
//     } else {
//       setTopButtonState("indeterminate");
//     }
//   }, [buttonsState]);

//   const toggleAll = (buttonsState: Array<boolean>) => {
//     if (buttonsState.every((state) => state)) {
//       const updatedCheckedState = new Array(buttonsState.length).fill(false);
//       setButtonsState(updatedCheckedState);
//       setTopButtonState(false);
//     } else {
//       const updatedCheckedState = new Array(buttonsState.length).fill(true);
//       setButtonsState(updatedCheckedState);
//       setTopButtonState(true);
//     }
//   };

//   return (
//     <Box display="flex" gap={8}>
//       <DecorativeBox>
//         <Text variant="heading">Bulk checkboxes</Text>
//         <Checkbox
//           checked={topButtonState}
//           onCheckedChange={() => toggleAll(buttonsState)}
//         >
//           <Text variant="body">List of options</Text>
//         </Checkbox>
//         <Box display="flex" flexDirection="column" marginLeft={8} gap={2}>
//           {options.map((option, index) => (
//             <Checkbox
//               key={option.name}
//               name={option.name}
//               value={option.name}
//               checked={buttonsState[index]}
//               onCheckedChange={() => handleChange(index)}
//             >
//               <Text variant="body">{option.name}</Text>
//             </Checkbox>
//           ))}
//         </Box>
//       </DecorativeBox>

//     </Box>
//   );
// };
