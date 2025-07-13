import React from 'react';
import { Track } from "../hooks/hook";

interface NowPlayingProps {
    track: Track | null;
    scrobbles: number | null;
}

const NowPlaying: React.FC<NowPlayingProps> = ({track,scrobbles}) => {

    return (
        <div className="flex flex-col items-end">
            <div className="text-right">
                <p>Total Scrobbles: {scrobbles ?? "..."}</p>
                <p> Currently listening to:</p>
            </div>
            {track ? (
                <>
                    <div className="mt-2">
                        <a href={track.url}>
                            <img src={track.image} alt="Album cover" className="w-auto" />
                        </a>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl overflow-auto">{track.name}</p>
                        <p className="">{track.artist}</p>
                    </div>
                </>
            ) : (
                <p className="text-xl">nothing.</p>
            )}
        </div>
    );
};

export default NowPlaying;
