import Image from 'next/image';
import { cookies } from 'next/headers';
import ProfileSettings from './ProfileSettings';

const Account = () => {
    const cookieStore = cookies();
    const currentUser = cookieStore.get('user');

    return <ProfileSettings userName={currentUser?.value} />;
};

export default Account;
