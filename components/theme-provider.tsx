"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setTheme("system");
  });
  return (
    <NextThemesProvider {...props}>
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
