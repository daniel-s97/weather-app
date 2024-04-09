import { ThemeProvider } from "next-themes";
import type React from "react";

type Props = { children: React.ReactNode };
export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
};
