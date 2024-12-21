// import React, { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContextProvider;










import React, { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to 'light' theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
