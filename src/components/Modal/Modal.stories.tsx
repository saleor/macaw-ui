import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Box, Button, CloseIcon, Combobox, Text } from "..";

import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Components / Modal",
  tags: ["autodocs"],
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Modal.Trigger>
        <Button variant="tertiary">Show modal</Button>
      </Modal.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Modal.Content>
        <Box
          backgroundColor="surfaceNeutralPlain"
          boxShadow="modal"
          __left="50%"
          __top="50%"
          position="fixed"
          __maxWidth="400px"
          __transform="translate(-50%, -50%)"
        >
          <Box
            display="flex"
            gap={3}
            justifyContent="center"
            alignItems="center"
          >
            <Text>Modal content!</Text>
            <Modal.Close>
              <Button variant="tertiary" icon={<CloseIcon />} size="small" />
            </Modal.Close>
          </Box>
        </Box>
      </Modal.Content>,
    ],
  },
};

export const Controlled = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal open={open} onChange={setOpen}>
        <Modal.Content>
          <Box
            backgroundColor="surfaceNeutralPlain"
            boxShadow="modal"
            __left="50%"
            __top="50%"
            position="fixed"
            __maxWidth="400px"
            __transform="translate(-50%, -50%)"
          >
            <Box
              display="flex"
              gap={3}
              justifyContent="center"
              alignItems="center"
            >
              <Text>Modal content!</Text>
              <Modal.Close>
                <Button variant="tertiary" icon={<CloseIcon />} size="small" />
              </Modal.Close>
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const WithComboboxInside = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal open={open} onChange={setOpen}>
        <Modal.Content>
          <Box
            backgroundColor="surfaceNeutralPlain"
            boxShadow="modal"
            __left="50%"
            __top="50%"
            position="fixed"
            __maxWidth="400px"
            __transform="translate(-50%, -50%)"
          >
            <Box
              display="flex"
              gap={3}
              padding={10}
              justifyContent="center"
              alignItems="center"
            >
              <Combobox
                label="Pick a color"
                size="large"
                value="color-black"
                options={[
                  { value: "color-black", label: "Black" },
                  { value: "color-red", label: "Red" },
                  { value: "color-green", label: "Green" },
                  { value: "color-blue", label: "Blue" },
                  { value: "color-orange", label: "Orange" },
                  { value: "color-purple", label: "Purple" },
                ]}
              />
              <Modal.Close>
                <Button variant="tertiary" icon={<CloseIcon />} size="small" />
              </Modal.Close>
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};
