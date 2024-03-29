'use client';

import { useTheme } from 'next-themes';
import { TiAdjustBrightness } from 'react-icons/ti';
import { IoMdMoon } from 'react-icons/io';

const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark' || !currentTheme) {
            return (
                <TiAdjustBrightness
                    className="h-6 w-6 select-none text-yellow-500"
                    role="button"
                    onClick={() => setTheme('light')}
                />
            );
        } else {
            return (
                <IoMdMoon
                    className="h-6 w-6 select-none text-[#9a84f9]"
                    role="button"
                    onClick={() => setTheme('dark')}
                />
            );
        }
    };

    return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
