import { useEffect, useState } from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
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