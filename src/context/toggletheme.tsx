"use client";

import React, { Children, createContext, useContext, useState  } from "react";

const TgleThmContext = createContext(null);

export default function ToggleThmeContext(
  {Children} : {children: React.ReactNode}
) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleThme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <TgleThmContext.Provider value={{isDarkTheme, toggleThme}}>
      {Children}
    </TgleThmContext.Provider>
  )
}

export const ThemeContext =  () => useContext(TgleThmContext)