import { cookies } from 'next/headers';
import AuthButton from '../AuthButton/AuthButton';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Account from '../Account/Account';

const Header = () => {
    const cookieStore = cookies();
    const currentUser = cookieStore.get('user');

    return (
        // <div className="flex px-8 flex-row justify-between items-center h-24 sticky top-0 bg-green-900">
        <header className="px-8 grid grid-cols-[300px_auto_300px] gap-8 items-center h-24 sticky top-0 bg-green-900">
            <Logo />
            <NavigationMenu />
            {currentUser ? <Account /> : <AuthButton />}
        </header>
    );
};

export default Header;
