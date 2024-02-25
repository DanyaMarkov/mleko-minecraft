import { cookies } from 'next/headers';
import AuthButton from '../AuthButton/AuthButton';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Account from '../Account/Account';
import SidebarMenu from '../NavigationMenu/SidebarMenu';
import ThemeSwitcher from '@/components/AppTheme/ThemeSwitcher';

const Header = () => {
    const cookieStore = cookies();
    const currentUser = cookieStore.get('user');

    return (
        <header className="sticky top-0 flex h-24 flex-row items-center justify-between gap-8 bg-green-900 px-8 py-4 md:justify-between dark:bg-green-900">
            <Logo />
            <NavigationMenu />
            <div className="gap:4 flex flex-row items-center gap-4">
                <ThemeSwitcher />

                {currentUser ? <Account /> : <AuthButton />}
                <SidebarMenu />
            </div>
        </header>
    );
};

export default Header;
