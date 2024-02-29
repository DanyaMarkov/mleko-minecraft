'use client';

import Link from 'next/link';
import { VscSignOut } from 'react-icons/vsc';

const AuthButton = () => {
    return (
        <button className="flex w-fit flex-row gap-2 justify-self-end rounded-full bg-green-600/30 hover:bg-green-700/40">
            <Link href="/login" className="px-4 py-6 lg:px-8">
                <VscSignOut color="white" size={24} />
            </Link>
        </button>
    );
};

export default AuthButton;
