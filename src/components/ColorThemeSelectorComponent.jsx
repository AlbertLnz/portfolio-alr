import { useEffect, useState } from "react";
import coffee from "../assets/images/ColorThemeSelectorComponent/coffee.svg";
import wine from "../assets/images/ColorThemeSelectorComponent/wine.svg";

const ColorThemeSelectorComponent = () => {
  const [theme, setTheme] = useState("dark");

  const handleSwapTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow rounded-lg bg-[#171719] flex items-center justify-center">
        <label className="swap">
          <input type="checkbox" onClick={handleSwapTheme} />

          <img src={wine} alt="" className="swap-off fill-current w-16" />
          <img src={coffee} alt="" className="swap-on fill-current w-16" />
        </label>
      </div>
    </div>
  );
};

export default ColorThemeSelectorComponent;
