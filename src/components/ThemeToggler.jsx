// import React, { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';

// const ThemeToggler = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div className="theme-toggler">
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//       </button>
//     </div>
//   );
// };

// export default ThemeToggler;









import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggler">
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
