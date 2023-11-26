"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from '../Icon'
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])
    if (!mounted) {
        return null;
    }

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className={"text-gray-500 text-3xl"} role="button" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <MoonIcon className={"text-gray-900 "} role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    return (
        <>
            {renderThemeChanger()}
        </>
    )
}

export default ThemeSwitcher;