import { Comfortaa } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Provider from '@/components/AppTheme/Provider';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'mleko',
    description: 'the best minecraft server'
};

const comfortaa = Comfortaa({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '700']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={comfortaa.className}>
            <body className="bg-[#edeef0] dark:bg-[#22272e]">
                <Provider>
                    <Header />
                    <main>{children}</main>
                </Provider>
            </body>
        </html>
    );
}
