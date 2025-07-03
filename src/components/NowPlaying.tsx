import React from 'react';
import {HookFM} from "../../api/hook.ts";

const NowPlaying: React.FC = () => {
    const {nowPlaying, totalScrobbles} = HookFM('zx111', 10);

    return (
        <div className="flex flex-col items-end">
            <div className="text-right">
                <p>Total Scrobbles: {totalScrobbles}</p>
                <h2 className="animate-pulse text-xl">zx is now scrobbling...</h2>
            </div>
            {nowPlaying ? (
                <>
                    <div className="mt-4">
                        <a href={nowPlaying.url}>
                            <img src={nowPlaying.image} alt="Album cover" className="w-auto" />
                        </a>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl">{nowPlaying.name}</p>
                        <p className="text-xl">{nowPlaying.artist}</p>
                    </div>
                </>
            ) : (
                <p className="text-xl">nothing.</p>
            )}
        </div>
    );
};

export default NowPlaying;
