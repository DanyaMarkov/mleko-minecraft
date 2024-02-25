import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'mleko/forum',
    description: 'обсуждения'
};

const Forum = () => {
    return <div> здесь обсуждения по темам! </div>;
};

export default Forum;
