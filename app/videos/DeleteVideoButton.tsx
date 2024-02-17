'use client';

import { TiTrash } from 'react-icons/ti';

const DeleteVideoButton = ({
    videoId,
    deleteVideo
}: {
    videoId: number;
    deleteVideo: (videoId: number) => void;
}) => {
    const handleDeleteVideo = () => {
        deleteVideo(videoId);
    };

    return (
        <button
            onClick={handleDeleteVideo}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
            <TiTrash />
        </button>
    );
};

export default DeleteVideoButton;
