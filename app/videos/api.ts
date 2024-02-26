'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const handleDeleteVideo = async (videoId: number) => {
    const supabase = createClient();

    const { error } = await supabase.from('videos').delete().eq('id', videoId);

    if (error) {
        return redirect('/videos?message=Could not add new video');
    }

    return redirect('/videos');
};

export const submitAddVideo = async (formData: FormData) => {
    const supabase = createClient();

    const episodeNumber = formData.get('episodeNumber') as string;
    const title = formData.get('title') as string;
    const link = formData.get('link') as string;
    const description = formData.get('description') as string;

    const { error } = await supabase
        .from('videos')
        .insert({ episodeNumber, title, link, description });

    if (error) {
        return redirect('/videos?message=Could not add new video');
    }

    return redirect('/videos');
};
