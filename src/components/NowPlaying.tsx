import React from 'react';
import { Track } from "../hooks/hook";

interface NowPlayingProps {
    track: Track | null;
    scrobbles: number | null;
}

const NowPlaying: React.FC<NowPlayingProps> = ({track, scrobbles}) => {

    return (
        <div className="flex flex-col items-end">
            <div className="text-right mb-2">
                <p className="text-sm text-gray-500">Total Scrobbles: {scrobbles ?? "..."}</p>
                <p className="border-b pb-1 mb-1">Currently listening to:</p>
            </div>
            {track ? (
                <>
                    <div className="mb-2">
                        <a href={track.url}>
                            <img src={track.image} alt="Album cover" className="w-auto border" />
                        </a>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold">{track.name}</p>
                        <p className="text-sm text-gray-500">{track.artist}</p>
                    </div>
                </>
            ) : (
                <p className="text-lg">nothing.</p>
            )}
        </div>
    );
};

export default NowPlaying;
