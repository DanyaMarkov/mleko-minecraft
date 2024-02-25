import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
    subsets: ['cyrillic', 'latin'],
    weight: ['400']
});

const Logo = () => {
    return (
        <div className="font-bold text-white">
            <span className={pressStart2P.className}>mleko minecraft</span>
        </div>
    );
};

export default Logo;
