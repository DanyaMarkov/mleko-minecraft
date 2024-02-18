import { Comfortaa } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

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
        <html lang="en" className={comfortaa.className}>
            <body>
                <Header />
                <main className="min-h-min flex flex-col">{children}</main>
            </body>
        </html>
    );
}
