import { createClient } from '@/utils/supabase/server';
import { VideoElement } from './VideoElement';
import AddVideoForm from './AddVideoForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'mleko/videos',
    description: 'наши задачи и цели на сервере'
};

const Videos = async () => {
    const supabase = createClient();
    const videos = await supabase.from('videos').select('*').order('id', { ascending: true });

    return (
        <div className="px-8">
            <div className="flex flex-row gap-4 mb-8 items-center">
                <h2>Все моменты приключений запечатлены самим mleko!</h2>
                <AddVideoForm />
            </div>

            <ul className="flex flex-col flex-wrap gap-16">
                {videos?.data?.map((video) => {
                    return (
                        <VideoElement
                            videoId={video.id}
                            title={video.title}
                            link={video.link}
                            description={video.description}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Videos;
