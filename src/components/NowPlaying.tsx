import React, { useEffect, useState } from 'react';

interface Track {
    name: string;
    artist: string;
    image: string;
    url: string;
    nowPlaying?: boolean;
}

const NowPlaying: React.FC = () => {
    const [nowPlaying, setNowPlaying] = useState<Track | null>(null);
    const [totalScrobbles, setTotalScrobbles] = useState<number | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                // 1) Call the serverless function
                const nowPlayingResponse = await fetch(
                    `/api/lastfm?method=user.getrecenttracks&user=zx111&limit=1&nowplaying=true`
                );
                const nowPlayingData = await nowPlayingResponse.json();

                const track = nowPlayingData.recenttracks?.track?.[0];
                if (track?.['@attr']?.nowplaying === 'true') {
                    setNowPlaying({
                        name: track.name,
                        artist: track.artist['#text'],
                        image: track.image[3]['#text'],
                        url: track.url,
                        nowPlaying: true
                    });
                } else {
                    // No song currently playing
                    setNowPlaying(null);
                }

                // 2) Fetch user info for total scrobbles
                const userResponse = await fetch(
                    `/api/lastfm?method=user.getInfo&user=zx111`
                );
                const userData = await userResponse.json();
                const userScrobbles = parseInt(userData.user.playcount, 10);
                setTotalScrobbles(userScrobbles);
            } catch (error) {
                console.error('Error fetching now playing track:', error);
            }
        };

        fetchNowPlaying();
        // Refresh every 10 seconds
        const interval = setInterval(fetchNowPlaying, 10000);
        return () => clearInterval(interval);
    }, []);

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
