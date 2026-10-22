import { create } from "zustand";
import { persist } from "zustand/middleware";// persist theme ko browser k localstorage main save karega,taake refresh k baad bhi selected theme rahay.

type Theme = "light" | "dark";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist( // persist theme ko browser k localstorage main save karega,taake refresh k baad bhi selected theme rahay.
    (set) => ({
      theme: "light", // hamari initial theme h

      setTheme: (theme) => set({ theme }),// settheme aik action h jo theme update kray ga
    }),
    {
      name: "trello-theme", // storage key h 
    }
  )
);