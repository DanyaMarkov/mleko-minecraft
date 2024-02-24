'use client';
import { TiTimes, TiThMenu } from 'react-icons/ti';

import { useState } from 'react';
import { navigationLinks } from './variables';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarMenu = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <button
                className="flex items-center gap-4 rounded-full bg-green-600/35 px-8 hover:bg-green-700/30 lg:hidden"
                type="button"
                onClick={() => setIsShowMenu(true)}>
                <TiThMenu />
            </button>
            <>
                <div
                    className={`z-49 absolute left-0 top-0 h-screen w-64 lg:hidden ${isShowMenu ? '' : '-translate-x-full'} overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800`}
                    tabIndex={-1}>
                    <h5 className="text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
                        Меню
                    </h5>
                    <button
                        type="button"
                        onClick={() => setIsShowMenu(false)}
                        className="absolute end-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                        <TiTimes size={24} />
                    </button>
                    <div className="overflow-y-auto py-4">
                        <ul className="space-y-2 font-medium">
                            {navigationLinks.map((link) => {
                                return (
                                    <li className="py-6" key={link.path}>
                                        <Link
                                            className={`mx-1 break-normal px-2 py-6 transition ${
                                                pathname === link.path
                                                    ? 'bg-black text-white hover:bg-black/80'
                                                    : 'bg-green-700 hover:bg-green-700/40'
                                            }`}
                                            onClick={() => setIsShowMenu(false)}
                                            href={link.path}>
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div
                    // className={` absolute right-0 top-0 z-50 h-screen w-screen items-center justify-center bg-black/20 transition-colors lg:hidden ${isShowMenu ? '' : 'hidden'}`}
                    className={`visible absolute right-0 top-0  h-screen w-[calc(100%+-256px)] items-center justify-center bg-black/20 transition-colors lg:hidden ${isShowMenu ? '' : 'hidden'}`}
                    onClick={() => setIsShowMenu(false)}
                />
            </>
        </>
    );
};

export default SidebarMenu;
