type VideoElementProps = {
    videoId: number;
    title: string;
    link: string;
    description: string;
};

import { TiTrash } from 'react-icons/ti';
import DeleteVideoButton from './DeleteVideoButton';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const VideoElement = ({ videoId, title, link, description }: VideoElementProps) => {
    const handleDeleteVideo = async (videoId: number) => {
        'use server';
        const supabase = createClient();

        const { error } = await supabase.from('videos').delete().eq('id', videoId);

        if (error) {
            return redirect('/videos?message=Could not add new video');
        }

        return redirect('/videos');
    };

    return (
        <li className="flex flex-row gap-4 items-center">
            {link.startsWith('https://www.youtube.com/embed/') ? (
                <iframe
                    width="420"
                    height="270"
                    src={link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            ) : (
                <span>не удалось получить видео</span>
            )}
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl">{title}</h3>
                <p>{description}</p>
            </div>
            <DeleteVideoButton videoId={videoId} deleteVideo={handleDeleteVideo} />
        </li>
    );
};
