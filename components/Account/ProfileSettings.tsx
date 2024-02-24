'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import { VscSettingsGear } from 'react-icons/vsc';
import defaultAvatar from '../../assets/image/defaultAvatar.jpg';

const ProfileSettings = ({ userName }: { userName?: string }) => {
    const pathname = usePathname();

    return (
        <Link
            href="/profile"
            className={`flex h-16 flex-row items-center justify-between gap-2 rounded-full transition-all
                ${
                    pathname === '/profile'
                        ? 'bg-black fill-white hover:bg-black/80'
                        : 'bg-green-600/75 hover:bg-green-700/40'
                }
                `}>
            <Image
                width={52}
                height={52}
                alt="avatar"
                src={defaultAvatar}
                className="mx-2 hidden rounded-full md:block"
            />
            <div className="flex flex-col items-start gap-1">
                <div className="px-4 font-bold md:mr-4 md:px-2">{userName}</div>
            </div>
        </Link>
    );
};

export default ProfileSettings;
