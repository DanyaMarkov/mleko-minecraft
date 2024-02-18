import { cookies } from 'next/headers';
import LogoutButton from './LogoutButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'mleko/profile',
    description: 'наши задачи и цели на сервере'
};

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
