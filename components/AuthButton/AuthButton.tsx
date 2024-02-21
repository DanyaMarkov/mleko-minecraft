import Link from 'next/link';
import { VscSignOut } from 'react-icons/vsc';

const AuthButton = () => {
    return (
        <button className="flex flex-row gap-2 w-fit justify-self-end bg-green-600/30 hover:bg-green-700/40 rounded-full">
            <Link href="/login" className="py-6 px-8">
                <VscSignOut color="white" size={24} />
            </Link>
        </button>
    );
};

export default AuthButton;
