'use client';

import { TiTrash } from 'react-icons/ti';
import { handleDeleteVideo } from './api';

const DeleteVideoButton = ({ videoId }: { videoId: number }) => {
    return (
        <button
            className="w-fit text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded inline-flex items-center"
            onClick={() => handleDeleteVideo(videoId)}>
            Удалить серию
            <TiTrash />
        </button>
    );
};

export default DeleteVideoButton;
