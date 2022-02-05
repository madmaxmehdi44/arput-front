import React from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

export const DarkLight = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  return (
    <DarkModeToggle 
      onChange={setIsDarkMode}
      isDarkMode={isDarkMode} 
      size={85} 
    />
  );
};