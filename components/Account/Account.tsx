import Image from 'next/image';
import defaultAvatar from '../../assets/image/defaultAvatar.jpg';
import { cookies } from 'next/headers';
import ProfileSettings from './ProfileSettings';

const Account = () => {
    const cookieStore = cookies();
    const currentUser = cookieStore.get('user');

    return (
        <div className="flex flex-row h-16 gap-4 justify-between items-center bg-green-600/35 rounded-full">
            <Image
                width={56}
                height={56}
                alt="avatar"
                src={defaultAvatar}
                className="rounded-full mx-1"
            />
            <div className="flex flex-col gap-1 items-start min-w-36">
                <div className="font-bold">{currentUser?.value}</div>
                {/* <div className="text-xs">Имя</div> */}
            </div>
            <ProfileSettings />
        </div>
    );
};

export default Account;
