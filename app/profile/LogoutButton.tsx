'use client';
import { useRouter } from 'next/navigation';

const LogoutButton = ({ resetCookies }: { resetCookies: () => unknown }) => {
    const router = useRouter();

    const logout = async () => {
        resetCookies();
        router.push('/login');
    };

    return (
        <button
            onClick={logout}
            className="rounded border border-red-700 bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
            Выйти
        </button>
    );
};

export default LogoutButton;
