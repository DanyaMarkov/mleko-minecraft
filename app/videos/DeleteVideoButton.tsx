'use client';

import { TiTrash } from 'react-icons/ti';
import { handleDeleteVideo } from './api';

const DeleteVideoButton = ({ videoId }: { videoId: number }) => {
    return (
        <button
            className="inline-flex w-fit items-center rounded bg-gray-300 px-1 py-1 text-sm font-bold text-gray-800 hover:bg-gray-400"
            onClick={() => handleDeleteVideo(videoId)}>
            Удалить серию
            <TiTrash />
        </button>
    );
};

export default DeleteVideoButton;
