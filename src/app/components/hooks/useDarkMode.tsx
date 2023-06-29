import { useState, useEffect } from "react";
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

interface useDarkModeOutput {
  mode: string;
  toggleTheme: () => void;
}

const useDarkMode = (): useDarkModeOutput => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    const userPref = localStorage.getItem("theme");

    const handleChangeTheme = () => {
      let check = (userPref && userPref === "dark") || mediaQuery.matches ? "dark" : "light";
      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChangeTheme);

    return () => mediaQuery.removeEventListener("change", handleChangeTheme);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const toggleTheme = () => setMode(mode === "dark" ? "light" : "dark");

  return { mode, toggleTheme };
};

export default useDarkMode;
