'use client';

import ProfileSettings from '@/components/Account/ProfileSettings';
import AuthButton from '@/components/AuthButton/AuthButton';
import { getCookieValueByName } from '@/global/utils';

const AuthInfo = () => {
    const currentUserName = getCookieValueByName('user');

    return (
        <div>
            {currentUserName ? <ProfileSettings userName={currentUserName} /> : <AuthButton />}
        </div>
    );
};

export default AuthInfo;
