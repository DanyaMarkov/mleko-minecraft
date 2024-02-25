import DeleteVideoButton from './DeleteVideoButton';

type VideoElementProps = {
    videoInfo: {
        id: number;
        episodeNumber: number;
        title: string;
        link: string;
        description: string;
    };
};

export const VideoElement = ({ videoInfo }: VideoElementProps) => {
    return (
        <li className="flex h-full w-full flex-row items-start gap-4 rounded-xl bg-gray-50  p-4 shadow-md dark:bg-gray-700/80 sm:m-auto md:flex-col">
            {videoInfo.link.startsWith('https://www.youtube.com/embed/') ? (
                <iframe
                    className="w-[40%] self-center justify-self-center md:w-[320px]"
                    width="320"
                    height="190"
                    src={videoInfo.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            ) : (
                <span>не удалось получить видео</span>
            )}
            <div className="flex flex-col gap-4 break-all">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg">{videoInfo.episodeNumber} серия</h3>
                    <h3 className="text-lg">«{videoInfo.title}»</h3>
                </div>
                <p className="text-sm">{videoInfo.description}</p>
                <DeleteVideoButton videoId={videoInfo.id} />
            </div>
        </li>
    );
};
