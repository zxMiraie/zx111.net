import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>The current time for me is : {time}</p>
        </div>
    );
};

export default Clock;