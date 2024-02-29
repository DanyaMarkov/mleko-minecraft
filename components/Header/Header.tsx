import Logo from '@/components/Logo/Logo';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
import SidebarMenu from '@/components/NavigationMenu/SidebarMenu';
import ThemeSwitcher from '@/components/AppTheme/ThemeSwitcher';
import AuthInfo from '../AuthInfo/AuthInfo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Header = () => {
    return (
        <header className="sticky top-0 flex h-24 flex-row items-center justify-between gap-8 bg-green-900 px-8 py-4 dark:bg-green-900 md:justify-between">
            <Logo />
            <NavigationMenu />
            <div className="gap:4 flex flex-row items-center gap-4">
                <ThemeSwitcher />
                <AuthInfo />
                <SidebarMenu />
            </div>
        </header>
    );
};

export default Header;
