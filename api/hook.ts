import {useState, useEffect} from "react";

interface RawTrack {
    artist: { '#text': string };
    name: string;
    url: string;
    image: { '#text': string }[];
    date?: { uts: string };
    '@attr'?: { nowplaying?: 'true' };
}

interface Track {
    name: string;
    artist: string;
    image: string;
    url: string;
    nowPlaying?: boolean;
    timestamp: number;
}

export function HookFM(user: string, limit: number = 10){
    const [nowPlaying, setNowPlaying] = useState<Track | null>(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState<Track[]>([]);
    const [totalScrobbles, setTotalScrobbles] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/lastfm?method=user.getrecenttracks&user=${user}&limit=${limit}&page=1`);
                const data = await response.json();
                const rawTracks: RawTrack[] = data.tracks;
                const alltracks: Track[] = rawTracks.map(track => ({
                    artist : track.artist['#text'],
                    name: track.name,
                    url: track.url,
                    image :track.image[3]['#text'],
                    nowPlaying: track['@attr']?.nowplaying === 'true',
                    timestamp: track.date ? parseInt(track.date.uts, 10) * 1000 : Date.now()
                }));


                const nowPlayingTrack = alltracks.find(track => track.nowPlaying);
                if (nowPlayingTrack) {
                    setNowPlaying(nowPlayingTrack);
                    setRecentlyPlayed(alltracks.filter(track => !track.nowPlaying));
                } else{
                    setNowPlaying(null);
                    setRecentlyPlayed(alltracks);
                }
            }catch(error) {
                console.error('Error fetching data from Last.fm:', error);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 10000); // Refresh every 10 seconds
        return () => clearInterval(interval);
    }, [user, limit]);

    useEffect(() => {
        const fetchTotalScrobbles = async () => {
            try {
                const response = await fetch(`/api/lastfm?method=user.getinfo&user=${user}`);
                const data = await response.json();

                setTotalScrobbles(parseInt(data.user.playcount, 10));
            } catch (error) {
                console.error('Error fetching total scrobbles:', error);
            }
        };
        fetchTotalScrobbles();
        const interval = setInterval(fetchTotalScrobbles, 60000);
        return () => clearInterval(interval);
    }, [user]);

    return {
        nowPlaying,
        recentlyPlayed,
        totalScrobbles
    };


}