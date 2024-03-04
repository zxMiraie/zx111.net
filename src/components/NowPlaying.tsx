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
                const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zx111&api_key=626c5839d97433660dc9a667e3ff7d4a&format=json&limit=1&nowplaying=true`);
                const data = await response.json();

                if (data.recenttracks.track[0]['@attr'] && data.recenttracks.track[0]['@attr'].nowplaying === 'true') {
                    const trackInfo = data.recenttracks.track[0];
                    const track: Track = {
                        name: trackInfo.name,
                        artist: trackInfo.artist['#text'],
                        image: trackInfo.image[3]['#text'],
                        url: trackInfo.url,
                        nowPlaying: true
                    };
                    setNowPlaying(track);
                } else {
                    setNowPlaying(null); // No song is currently playing
                }

                const userResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=zx111&api_key=626c5839d97433660dc9a667e3ff7d4a&format=json`);
                const userData = await userResponse.json();
                const userScrobbles = parseInt(userData.user.playcount, 10);
                setTotalScrobbles(userScrobbles);
            } catch (error) {
                console.error('Error fetching now playing track:', error);
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-end">
            <div className="text-right">
                <p>Total Scrobbles: {totalScrobbles}</p>
                <h2 className="animate-pulse text-xl">Now Playing</h2>
            </div>
            {nowPlaying ? (
                <>
                    <div className="mt-4">
                        <a href={nowPlaying.url}>
                            <img src={nowPlaying.image} alt="Album cover" className="w-auto"/>
                        </a>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl">{nowPlaying.name}</p>
                        <p className="text-xl">{nowPlaying.artist}</p>
                    </div>
                </>
            ) : (
                <p className="text-xl">Nothing is playing.</p>
            )}
        </div>
    );
};

export default NowPlaying;
