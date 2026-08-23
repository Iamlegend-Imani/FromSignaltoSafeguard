"use client";

import { useEffect, useState } from "react";

type Theme = "day" | "night";

export default function ThemeControls() {
  const [theme, setTheme] = useState<Theme>("day");

  useEffect(() => {
    const saved = window.localStorage.getItem("fss-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day";
    const initial = saved === "day" || saved === "night" ? saved : preferred;
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const chooseTheme = (next: Theme) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("fss-theme", next);
  };

  return (
    <>
      <div className="living-field" aria-hidden="true">
        <span className="field-orb field-orb-one" />
        <span className="field-orb field-orb-two" />
        <span className="field-orb field-orb-three" />
      </div>
      <div className="theme-dock" role="group" aria-label="Choose display theme">
        <span className="theme-dock-label">Field</span>
        <button
          type="button"
          className={theme === "day" ? "active" : ""}
          onClick={() => chooseTheme("day")}
          aria-pressed={theme === "day"}
        >
          <span aria-hidden="true">☼</span> Day
        </button>
        <button
          type="button"
          className={theme === "night" ? "active" : ""}
          onClick={() => chooseTheme("night")}
          aria-pressed={theme === "night"}
        >
          <span aria-hidden="true">☾</span> Night
        </button>
      </div>
    </>
  );
}
