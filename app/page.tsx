import Image from 'next/image';
import mleko from '@/assets/image/mleko.jpg';

export default function Index() {
    return (
        // <div className="animate-in m-auto flex w-full flex-col items-center self-center px-6 md:grid md:grid-cols-[auto_370px]">
        <div className="m-auto flex w-full flex-col items-center self-center px-6 md:grid md:grid-cols-[auto_370px]">
            <div className="w-full justify-self-center">
                <h2 className="mb-4 text-4xl font-bold">Что такое Mleko Minecraft?</h2>
                <p>
                    Привет, это проект Mleko Minecraft, где мы решили пройти Майнкрафт
                    по-настоящему! Следите за нашими успехами на этом сайте!
                </p>
            </div>
            <Image
                src={mleko}
                alt="mleko main"
                className="h-[150px] w-[150px] self-center rounded-xl hover:animate-spin md:h-[280px] md:w-[280px]"
                priority
            />
        </div>
    );
}
