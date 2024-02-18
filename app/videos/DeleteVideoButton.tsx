'use client';

import { TiTrash } from 'react-icons/ti';
import { handleDeleteVideo } from './api';

const DeleteVideoButton = ({ videoId }: { videoId: number }) => {
    return (
        <button
            onClick={() => handleDeleteVideo(videoId)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
            <TiTrash />
        </button>
    );
};

export default DeleteVideoButton;
