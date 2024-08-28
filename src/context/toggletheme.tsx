"use client";

import React, { createContext, useContext, useState } from "react";

const TgleThmContext = createContext(null);

export default function ToggleThmeContext(
  { children }: { children: React.ReactNode }
) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleThme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <TgleThmContext.Provider value={{ isDarkTheme, toggleThme }}>
      {children}
    </TgleThmContext.Provider>
  )
}

export const ThemeContext = () => useContext(TgleThmContext);