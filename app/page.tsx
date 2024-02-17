import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import mleko from '@/assets/image/mleko.jpg';

export default async function Index() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            createClient();
            return true;
        } catch (e) {
            return false;
        }
    };

    const isSupabaseConnected = canInitSupabaseClient();

    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
                <main className="flex-1 flex flex-col gap-6 items-center">
                    <h2 className="font-bold text-4xl mb-4">Что такое Mleko Minecraft?</h2>
                    <p>
                        Привет, это проект Mleko Minecraft, где мы решили пройти Майнкрафт
                        по-настоящему! Следите за нашими успехами на этом сайте!
                    </p>
                    <Image
                        src={mleko}
                        width={260}
                        height={260}
                        alt="mleko main"
                        className="hover:animate-spin"
                    />
                </main>
            </div>
        </div>
    );
}
