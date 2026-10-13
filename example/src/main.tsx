import {
  Box,
  Button,
  Input,
  Popover,
  Text,
  ThemeProvider,
} from "@saleor/macaw-ui";
import { StrictMode, useState, version } from "react";
import { createRoot } from "react-dom/client";

import "@saleor/macaw-ui/style";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <Box display="flex" flexDirection="column" gap={4} padding={6}>
      <Text size={8}>React {version}</Text>
      <Button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </Button>
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <Text>Hello, {name}</Text>}
      <Popover>
        <Popover.Trigger>
          <Button variant="secondary">Open popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Box padding={4}>
            <Text>Popover content</Text>
          </Box>
        </Popover.Content>
      </Popover>
    </Box>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
