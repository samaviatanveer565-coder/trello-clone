import { Sun, Moon } from "lucide-react";//lucide-react aik icon library h wahan say sun aur moon icon import huway hain.
import { useThemeStore } from "../../store/themeStore";// store ka path

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);// store say current theme read kr rhy hain
  const setTheme = useThemeStore((state) => state.setTheme);// store say current theme read kr rhy hain.

  return (
    <div
      role="group"
      aria-label="Choose theme"
      className="flex items-center gap-1 rounded-full bg-[#F1F2F4] p-1"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        aria-pressed={theme === "light"}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          theme === "light"
            ? "bg-white text-[#0065FF] shadow-sm"
            : "text-[#626F86] hover:bg-white/50"
        }`}
      >
        <Sun size={18} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        aria-pressed={theme === "dark"}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          theme === "dark"
            ? "bg-[#172B4D] text-white shadow-sm"
            : "text-[#626F86] hover:bg-white/50"
        }`}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}