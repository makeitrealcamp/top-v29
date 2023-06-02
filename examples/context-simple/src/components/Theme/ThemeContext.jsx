import { createContext, useState, useContext } from "react";

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Crear un componente que provea el contexto
// 2.1 Definir el estado que queremos compartir
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const store = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Crear un customHook que consuma el contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme debe estar dentro del proveedor ThemeProvider' );
  }

  return context;
};

// 4. Exportar el componente que provee el contexto
export default ThemeContext;
