import { useEffect, useState } from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch { /* ignore */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const DarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-12 shrink-0 cursor-pointer"
    >
      <img
        src={LightButton}
        alt=""
        className={`absolute right-0 z-10 w-12 drop-shadow transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img src={DarkButton} alt="" className="w-12 drop-shadow transition-all duration-300" />
    </button>
  );
};

export default DarkMode;