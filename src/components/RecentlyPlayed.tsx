import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Track {
    artist: string;
    track: string;
    timestamp: number;
}

const RecentlyPlayed: React.FC = () => {
    const [recentlyPlayed, setRecentlyPlayed] = useState<Track[]>([]);

    useEffect(() => {
        const fetchRecentlyPlayed = async () => {
            try {
                const response = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=zx111&api_key=626c5839d97433660dc9a667e3ff7d4a&format=json&limit=10&page=1`
                );
                const data = await response.json();
                const tracks = data.recenttracks.track.map((trackInfo: any) => ({
                    artist: trackInfo.artist['#text'],
                    track: trackInfo.name,
                    timestamp: parseInt(trackInfo.date ? trackInfo.date.uts : '0', 10)* 1000

                }));
                setRecentlyPlayed(tracks);
            } catch (error) {
                console.error('Error fetching recently played tracks:', error);
            }
        };

        fetchRecentlyPlayed();

        // Refresh recently played every 10 seconds
        const interval = setInterval(fetchRecentlyPlayed, 10000);
        return () => clearInterval(interval);


    }, []);

    return (
        <div>
            <h1>What I've been listening to:</h1>
            {recentlyPlayed.length > 0 ? (
                <ul>
                    {recentlyPlayed.map((track, index) => (
                        <li key={index} className="flex justify-start text-sm items-center">
                            <span className="truncate" style={{ maxWidth: '50%' }} title={`${track.artist} - ${track.track}`}>
                                {track.artist} - {track.track}
                            </span>
                            <span className="flex-shrink-0 ml-2 whitespace-nowrap">
                                // {index === 0 ? 'Latest Scrobble' : `Played ${formatDistanceToNow(new Date(track.timestamp))} ago`}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecentlyPlayed;