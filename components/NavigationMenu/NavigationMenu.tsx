'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from './variables';

const NavigationMenu = () => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-row gap-2 bg-green-600/35 rounded-full">
            {navigationLinks.map((link) => {
                return (
                    <li className="py-6" key={link.path}>
                        <Link
                            className={`transition py-6 px-8 mx-1 rounded-full  ${
                                pathname === link.path
                                    ? 'bg-black text-white'
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
