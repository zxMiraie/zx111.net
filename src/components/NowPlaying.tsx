import React, { useEffect, useState } from 'react';

interface Track {
    name: string;
    artist: string;
    image: string;
    url: string;
}

const NowPlaying: React.FC = () => {
    const [nowPlaying, setNowPlaying] = useState<Track | null>(null);
    const [totalScrobbles, setTotalScrobbles] = useState<number | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zx111&api_key=626c5839d97433660dc9a667e3ff7d4a&format=json&limit=1&nowplaying=true`);
                const data = await response.json();
                const trackInfo = data.recenttracks.track[0];
                const track: Track = {
                    name: trackInfo.name,
                    artist: trackInfo.artist['#text'],
                    image: trackInfo.image[3]['#text'],
                    url: trackInfo.url

                };
                setNowPlaying(track);
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
        <div>

            {nowPlaying ? (
                <div>
                    <p>Total Scrobbles: {totalScrobbles}</p>
                    <h2> Now Playing</h2>
                    <a href={nowPlaying.url}><img src={nowPlaying.image} alt="Album cover"/></a>
                    <p>{nowPlaying.name}</p>
                    <p>{nowPlaying.artist}</p>
                </div>
            ) : (
                <p>Loading... (or nothing is playing.)</p>
            )}
        </div>
    );
};

export default NowPlaying;

