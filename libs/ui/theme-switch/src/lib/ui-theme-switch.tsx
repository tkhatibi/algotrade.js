import { useTheme } from "next-themes";

/* eslint-disable-next-line */
export interface UiThemeSwitchProps {}

export function UiThemeSwitch(props: UiThemeSwitchProps) {
  const { theme = "light", setTheme } = useTheme();

  return (
    <button
      className="rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      switch theme
    </button>
  );
}

export default UiThemeSwitch;
