import React from 'react';
import './App.css';
import NowPlaying from "./components/NowPlaying";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Clock from "./components/Clock.tsx";
import Discord from "./components/Discord.tsx";

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <header className="p-4 sm:absolute sm:top-0 sm:left-0">
                <RecentlyPlayed/>
            </header>
            <main className="flex-grow flex items-center justify-center p-3">
                <Links/>
            </main>
            <aside className="p-4 sm:absolute sm:bottom-0 sm:right-0">
                <NowPlaying/>
            </aside>
            <aside className="p-4 sm:absolute sm:top-4 sm:right-4">
                <Discord userId="360803113864658944"/>
            </aside>
            <footer className="w-full p-4 text-center sm:text-left">
                <Footer/>
                <Clock/>
            </footer>
        </div>
    );
};

export default App;