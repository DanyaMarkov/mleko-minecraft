import { createClient } from '@/utils/supabase/server';
import { VideoElement } from './VideoElement';
import AddVideoForm from './AddVideoForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'mleko/videos',
    description: 'список видео-серий'
};

const Videos = async () => {
    const supabase = createClient();
    const videos = await supabase
        .from('videos')
        .select('*')
        .order('episodeNumber', { ascending: true });

    return (
        <div className="px-8">
            <div className="mb-8 flex flex-row items-center gap-4">
                <h2>Все моменты приключений запечатлены самим mleko!</h2>
                <AddVideoForm />
            </div>

            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {videos?.data?.map((video) => {
                    return <VideoElement key={video} videoInfo={video} />;
                })}
            </ul>
        </div>
    );
};

export default Videos;
