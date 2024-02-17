'use client';
import { useRouter } from 'next/navigation';

const LogoutButton = ({ resetCookies }: { resetCookies: () => any }) => {
    const router = useRouter();

    const logout = async () => {
        resetCookies();
        router.push('/login');
    };

    return (
        <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
            Выйти
        </button>
    );
};

export default LogoutButton;
