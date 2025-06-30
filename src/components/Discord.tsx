import React, { useEffect, useState } from 'react';


interface DiscordProps {
    userId: string;
}

interface DiscordUser {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    display_name: string;
}

interface Activity {
    id: string;
    name: string;
    type: number;
    state: string;
    details: string;
    timestamps: {
        start: number;
    };
    assets: {
        large_image: string;
        large_text: string;
        small_image: string;
        small_text: string;
    };
}

interface LanyardData {
    discord_user: DiscordUser;
    discord_status: string;
    activities: Activity[];
}

const Discord: React.FC<DiscordProps> = ({ userId }) => {
    const [data, setData] = useState<LanyardData | null>(null);

    useEffect(() => {
       const fetchData = async () => {
           try{
               const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
               const json = await response.json();
               setData(json);
              } catch (error) {
                console.error('Error fetching data:', error);
           }
       }

        fetchData();
    }, [userId]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const { discord_user, discord_status, activities } = data;
    const avatarUrl = `https://api.lanyard.rest/${discord_user.id}.png`;

    // Define border color based on Discord status
    let borderColorClass = null;
    switch (discord_status) {
        case 'online':
            borderColorClass = 'border-green-500';
            break;
        case 'idle':
            borderColorClass = 'border-yellow-500';
            break;
        case 'dnd':
            borderColorClass = 'border-red-500';
            break;
        case 'offline':
            borderColorClass = 'border-gray-500';
            break;
        default:
            borderColorClass = '';
    }
    const nonSpotifyActivities = activities.filter(activity => activity.name !== 'Spotify');
    const customStatusActivity = nonSpotifyActivities.find(activity => activity.name === 'Custom Status');
    const filteredActivities = activities.filter(activity => activity.name !== 'Spotify' && activity.name !== 'Custom Status');

    return (
        <div className="p-3 text-white rounded-lg shadow-md text-right">
            <div className="flex items-center">
                <div className="ml-4 p-3">
                    <h2 className="text-xl">{discord_user.display_name || discord_user.username}</h2>
                    <p className="text-sm">{discord_status}</p>
                    <p>{customStatusActivity ? customStatusActivity.state : ' '}</p>
                    <div className="mt-4">
                        {filteredActivities.map((activity, index) => (
                            <div key={index} className="mt-2">
                                <p>{activity.name}</p>
                                <p>{activity.details}</p>
                                <p>{activity.state}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={avatarUrl} alt="User Avatar" className={`w-36 h-36 rounded-full border-4 ${borderColorClass}`}/>
            </div>
        </div>
    );
};

export default Discord;