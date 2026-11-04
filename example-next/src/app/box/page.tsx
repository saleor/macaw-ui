// Renders only Box from a Server Component: the page should ship none of the interactive components
import { Box } from "@saleor/macaw-ui";

export default function Page() {
  return <Box padding={4}>Only Box</Box>;
}
