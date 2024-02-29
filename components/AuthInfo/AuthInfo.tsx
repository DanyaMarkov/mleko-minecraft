'use client';

import ProfileSettings from '../Account/ProfileSettings';
import AuthButton from '../AuthButton/AuthButton';

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(';').shift();
}

const AuthInfo = () => {
    const currentUserName = getCookie('user');
    return (
        <div>
            {currentUserName ? <ProfileSettings userName={currentUserName} /> : <AuthButton />}
        </div>
    );
};

export default AuthInfo;
