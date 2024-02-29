/* "use client";

import { useState, createContext } from "react";

const ThemeContext = createContext();

export function Providers({ children }) {
  const [nightMode, setNightMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ nightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
 */
