'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from './variables';

const NavigationMenu = () => {
    const pathname = usePathname();

    return (
        <ul className="hidden w-fit flex-row gap-2 self-center rounded-full bg-green-600/35 sm:hidden md:hidden lg:flex lg:justify-self-center">
            {navigationLinks.map((link) => {
                return (
                    <li className="py-6" key={link.path}>
                        <Link
                            className={`mx-1 break-normal rounded-full px-8 py-6 transition ${
                                pathname === link.path
                                    ? 'bg-black text-white hover:bg-black/80'
                                    : 'hover:bg-green-700/40'
                            }`}
                            href={link.path}>
                            {link.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationMenu;
