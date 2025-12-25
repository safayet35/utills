import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./Button";
const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const root = document.documentElement;
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
        } else {
            setIsDark(systemPrefersDark);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = isDark => {
        setIsDark(!isDark);
    };

    return (
        <Button
            variant=""
            size="icon"
            onClick={() => toggleTheme(isDark)}
            className="rounded-full"
            aria-label="Toggle dark mode"
        >
            {isDark ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    );
};

export default ThemeSwitcher;
