import React from 'react';
import { Link } from 'react-router-dom';
import Clock from "../components/Clock";
import Discord from "../components/Discord";
import Footer from "../components/Footer";
import Links from "../components/Links";
import NowPlaying from "../components/NowPlaying";
import RecentlyPlayed from "../components/RecentlyPlayed";
import {HookFM} from "../hooks/hook";
import "../App.css"


const DashboardPage: React.FC = () => {
    const { nowPlaying, recentlyPlayed, totalScrobbles, isLoading, error } = HookFM('zx111', 10);


    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <header className="p-4 sm:absolute sm:top-0 sm:left-0">
                <RecentlyPlayed
                    tracks = {recentlyPlayed}
                    isLoading = {isLoading}
                    error = {error}
                />
            </header>
            <main className="flex-grow flex items-center justify-center p-3">
                <Links/>
            </main>
            <aside className="p-4 sm:absolute sm:bottom-0 sm:right-0">
                <NowPlaying
                    track={nowPlaying}
                    scrobbles={totalScrobbles}
                />
            </aside>
            <aside className="p-4 sm:absolute sm:top-4 sm:right-4">
                <Link to="/about" className="inline-block transition-transform duration-200 hover:scale-105">
                    <Discord userId="360803113864658944"/>
                </Link>
            </aside>
            <footer className="p-4 text-center sm:text-left">
                <Footer/>
                <Clock/>
            </footer>
        </div>
    );
};

export default DashboardPage;