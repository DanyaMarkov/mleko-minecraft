import AuthButton from '../AuthButton/AuthButton';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const Header = () => {
    return (
        <div className="flex px-8 flex-row justify-between items-center h-24">
            <Logo />
            <NavigationMenu />
            <AuthButton />
        </div>
    );
};

export default Header;
