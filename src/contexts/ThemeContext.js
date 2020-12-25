import React, { useState } from "react"

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('theme');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  return 'light';
}

export const ThemeContext = React.createContext({
  name: "light",
  updateTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialColorMode)

  const setThemeFromStorage = (value) => {
    setTheme(value);
    window.localStorage.setItem('theme', value);
  };

  return (
    <ThemeContext.Provider
      value={{
        name: theme,
        updateTheme: setThemeFromStorage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}