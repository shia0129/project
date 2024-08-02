import React, { useState, useEffect, useRef } from "react";

function Settings({ isMenuOpen }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const isUserColorTheme = localStorage.getItem("color-theme");
    const isOsColorTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return isUserColorTheme ? isUserColorTheme === "dark" : isOsColorTheme;
  });

  const checkboxRef = useRef(null);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("color-theme", theme);
    document.documentElement.setAttribute("color-theme", theme);
    if (checkboxRef.current) {
      checkboxRef.current.checked = isDarkMode;
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isMenuOpen ? "list active" : "list"}>
      <input
        id="check"
        type="checkbox"
        ref={checkboxRef}
        onChange={handleDarkModeToggle}
        defaultChecked={isDarkMode}
      />
    </div>
  );
}

export default Settings;
