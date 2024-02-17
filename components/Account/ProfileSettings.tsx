'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscSettingsGear } from 'react-icons/vsc';

const ProfileSettings = () => {
    const pathname = usePathname();

    return (
        <Link
            href="/profile"
            className={`transition flex flex-column justify-around items-center rounded-full h-full px-6  hover:bg-green-700/40 ${
                pathname === '/profile' ? 'bg-black text-white' : 'bg-green-600/75'
            }`}>
            <VscSettingsGear size={18} />
        </Link>
    );
};

export default ProfileSettings;
