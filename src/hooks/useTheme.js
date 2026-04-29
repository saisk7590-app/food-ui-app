import { useContext, createContext } from 'react';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      colors,
      spacing,
      typography,
    };
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors,
    spacing,
    typography,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default useTheme;
