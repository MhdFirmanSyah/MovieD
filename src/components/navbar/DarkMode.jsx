import { useState, useEffect } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div onClick={toggleDarkMode} className=" cursor-pointer">
      <img
        className="w-8 lg:h-9  lg:w-9 p-1  m-auto rounded-full backdrop-blur-xl bg-slate-50/[0.5]"
        src={
          isDark
            ? "./src/assets/image/dark.png"
            : "./src/assets/image/light.png"
        }
        alt=""
      />
    </div>
  );
}
