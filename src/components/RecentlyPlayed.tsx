import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Track } from '../hooks/hook';

interface Props {
    tracks: Track[];
    isLoading: boolean;
    error: string | null;
}

const RecentlyPlayed: React.FC<Props> = ({ tracks, isLoading, error }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>What I've been listening to:</h1>
            {tracks.length > 0 ? (
                <ul>
                    {tracks.map((track) => (
                        <li key={track.timestamp} className="flex justify-start text-sm items-center">
                            <span
                                className=""
                                title={`${track.artist} - ${track.name}`}
                            >
                                {track.artist} - {track.name}
                            </span>
                            <span className="flex-shrink-0 ml-2 whitespace-nowrap">
                                {`// ${formatDistanceToNow(new Date(track.timestamp))} ago`}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recent tracks to display.</p>
            )}
        </div>
    );
};

export default RecentlyPlayed;
