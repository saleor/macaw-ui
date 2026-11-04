import { getCSSVariables, ThemeProvider } from "@saleor/macaw-ui";
import type { ReactNode } from "react";

import "@saleor/macaw-ui/style";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // ThemeProvider sets theme variables only after hydration; render them on the server to avoid an unstyled flash.
    // Spread into a plain object: Server Components can't pass objects with methods (it has toString).
    <html lang="en" style={{ ...getCSSVariables("defaultLight") }}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
