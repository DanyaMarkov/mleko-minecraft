import { createClient } from '@/utils/supabase/server';
import { VideoElement } from './VideoElement';
import AddVideoForm from './AddVideoForm';
import { redirect } from 'next/navigation';

const Videos = async () => {
    const supabase = createClient();
    const videos = await supabase.from('videos').select('*').order('id', { ascending: true });

    const addVideo = async (formData: FormData) => {
        'use server';
        const supabase = createClient();

        const title = formData.get('title') as string;
        const link = formData.get('link') as string;
        const description = formData.get('description') as string;

        const { error, data: response } = await supabase
            .from('videos')
            .insert({ title, link, description });

        if (error) {
            return redirect('/videos?message=Could not add new video');
        }

        return redirect('/videos');
    };

    return (
        <div className="px-8">
            <div className="flex flex-row gap-4 mb-8 items-center">
                <h2>Все моменты приключений запечатлены самим mleko!</h2>
                <AddVideoForm addVideo={addVideo} />
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
