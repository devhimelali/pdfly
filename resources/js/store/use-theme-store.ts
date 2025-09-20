import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

type State = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const applyTheme = (theme: Theme) => {
    const html = document.documentElement;
    html.classList.remove("dark", "light");

    // If system theme, detect user preference
    let appliedTheme = theme;
    if (theme === "system") {
        appliedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    html.classList.add(appliedTheme);
    localStorage.setItem("theme", theme);
};

export const useThemeStore = create<State>()(
    persist(
        (set, get) => ({
            theme: "system",

            setTheme: (theme: Theme) => {
                applyTheme(theme);
                set({ theme });
            },
        }),
        {
            name: "theme-storage",
            storage: {
                getItem: (name) => {
                    const value = localStorage.getItem(name);
                    return value ? JSON.parse(value) : null;
                },
                setItem: (name, value) => {
                    localStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name) => {
                    localStorage.removeItem(name);
                },
            },
            // 🔑 Automatically apply theme after rehydration
            onRehydrateStorage: () => (state) => {
                if (state?.theme) {
                    applyTheme(state.theme);
                }
            },
        },
    ),
);
