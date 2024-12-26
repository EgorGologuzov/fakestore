import React, { createContext, useContext, useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';


const ThemeContext = createContext();


export function useTheme() {
  return useContext(ThemeContext);
};


const readThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme ? JSON.parse(theme) : null;
}


const writeThemeToLocalStorage = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme));
}


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => readThemeFromLocalStorage() ?? { darkMode: false });

  const toggleTheme = () => {
    const newTheme = { ...theme, darkMode: !theme.darkMode };
    setTheme(newTheme);
  }

  const contextValue = {
    theme,
    toggleTheme,
  }

  useEffect(() => {
    writeThemeToLocalStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme.darkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
