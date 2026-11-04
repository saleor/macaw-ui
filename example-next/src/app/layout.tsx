import { ThemeProvider } from "@saleor/macaw-ui";
import type { ReactNode } from "react";

import "@saleor/macaw-ui/style";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
