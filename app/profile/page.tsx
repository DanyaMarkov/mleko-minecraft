import { cookies } from 'next/headers';
import LogoutButton from './LogoutButton';

const Profile = () => {
    const resetCookies = async () => {
        'use server';
        cookies().delete('user');
    };

    return (
        <div>
            <LogoutButton resetCookies={resetCookies} />
        </div>
    );
};

export default Profile;
