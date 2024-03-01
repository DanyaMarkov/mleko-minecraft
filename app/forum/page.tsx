import { Metadata } from 'next';
import AddTopic from './AddTopic';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: 'mleko/forum',
    description: 'обсуждения'
};

const Forum = () => {
    const cookieStore = cookies();
    const currentUser = cookieStore.get('user');

    return <div>{currentUser?.value && <AddTopic />}</div>;
};

export default Forum;
