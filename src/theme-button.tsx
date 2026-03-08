import React, { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ThemeButton: React.FC = () => {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "dark");
  
    useEffect(() => {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
      }
    }, [theme]);
  
    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    };
  
    return theme === "dark" ? (
      <BsSunFill className="icon-buttons" onClick={toggleTheme} />
    ) : (
      <BsMoonFill className="icon-buttons" onClick={toggleTheme} />
    );
  };

export default ThemeButton;