import React from 'react';
import Clock from "../components/Clock";
import Discord from "../components/Discord";
import Footer from "../components/Footer";
import Links from "../components/Links";
import NowPlaying from "../components/NowPlaying";
import RecentlyPlayed from "../components/RecentlyPlayed";
import Navbar from "../components/Navbar";
import {HookFM} from "../hooks/hook";
import "../App.css"

const LandingPage: React.FC = () => {
    const { nowPlaying, recentlyPlayed, totalScrobbles, isLoading, error } = HookFM('zx111', 19);

    return (
        <div className="container mx-auto p-6 max-w-10xl min-h-screen flex flex-col fade-in">
            <div className="flex-grow">
                <Navbar />
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Discord userId={"360803113864658944"}/>
                    </div>
                    <div className="flex flex-col items-end">
                        <Clock/>
                        <div className="mt-1">
                            <Links />
                        </div>
                    </div>
                </div>
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:divide-x">
                    <div className="md:pr-4">
                        <NowPlaying track={nowPlaying} scrobbles={totalScrobbles}/>
                    </div>
                    <div className="md:pl-4">
                        <RecentlyPlayed tracks={recentlyPlayed} isLoading={isLoading} error={error}/>
                    </div>
                </div>
            </div>
            <div className="mt-auto pt-8 text-center">
                <Footer/>
            </div>
        </div>
    );
};

export default LandingPage;
