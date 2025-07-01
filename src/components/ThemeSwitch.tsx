import { themeAtom } from "../atoms";
import { useAtom } from "jotai";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";

export default function ThemeSwitch() {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="cursor-pointer"
      aria-label="switch theme"
      onClick={handleClick}
    >
      {theme === "dark" ? (
        <img src={iconMoon} alt="" />
      ) : (
        <img src={iconSun} alt="" />
      )}
    </button>
  );
}
