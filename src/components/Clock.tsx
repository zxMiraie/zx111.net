import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));
    const [message, setMessage] = useState('');

    // Generate a message based on the current time
    const getTimeBasedMessage = (currentDate: Date) => {
        const hour = currentDate.getHours();

        if (hour >= 5 && hour < 12) {
            return "Waking up...";
        } else if (hour >= 12 && hour < 18) {
            return "Working, most likely.";
        } else if (hour >= 18 && hour < 23) {
            return "Winding down.";
        } else {
            return "Asleep - most likely";
        }
    };

    useEffect(() => {
        const updateTimeAndMessage = () => {
            const currentDate = new Date();
            setTime(currentDate.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));
            setMessage(getTimeBasedMessage(currentDate));
        };

        // Initialize
        updateTimeAndMessage();

        const interval = setInterval(updateTimeAndMessage, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-right">
            <p>{time}</p>
            <p className="text-sm">{message}</p>
        </div>
    );
};

export default Clock;