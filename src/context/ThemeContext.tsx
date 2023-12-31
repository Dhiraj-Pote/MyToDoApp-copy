import { createContext, useEffect, useState, ReactNode } from "react";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";
import React from 'react';

interface Props {
  children: ReactNode;
}

interface ThemeInterface {
  isDark: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeInterface | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkTheme")!) || true // Set dark mode as the default theme
  );

  const changeTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      disableDarkMode(); // Disable dark mode when theme is currently dark
    } else {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      }); // Enable dark mode when theme is currently light
    }
    localStorage.setItem("darkTheme", String(!isDark)); // Save the opposite value in localStorage
  };

  useEffect(() => {
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else disableDarkMode();
    localStorage.setItem("darkTheme", JSON.stringify(isDark));
  }, [isDark]);

  const themeValue: ThemeInterface = {
    isDark,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
