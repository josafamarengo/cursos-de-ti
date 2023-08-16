"use client";

import { ThemeProvider } from "next-themes";

interface Props {
    children: React.ReactNode;
}

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
