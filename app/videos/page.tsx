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
            <div className="flex flex-row gap-4 mb-8 items-center">
                <h2>Все моменты приключений запечатлены самим mleko!</h2>
                <AddVideoForm />
            </div>

            <ul className="grid grid-cols-3 gap-4">
                {/* <ul className="flex flex-row flex-wrap gap-4"> */}
                {videos?.data?.map((video) => {
                    return <VideoElement videoInfo={video} />;
                })}
            </ul>
        </div>
    );
};

export default Videos;
