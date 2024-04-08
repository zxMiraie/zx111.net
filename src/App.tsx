import React from 'react';
import './App.css';
import NowPlaying from "./components/NowPlaying";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Footer from "./components/Footer";
import Links from "./components/Links";

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <header className="p-4 sm:absolute sm:top-0 sm:left-0">
                <RecentlyPlayed/>
            </header>
            <main className="flex-grow flex items-center justify-center p-4">
                <Links/>
            </main>
            <aside className="p-4 sm:absolute sm:bottom-0 sm:right-0">
                <NowPlaying/>
            </aside>
            <aside className="p-4 text-right sm:absolute sm:top-0 sm:right-0">
                <p>I'm zx111</p>
                <p>I'm very lazy to finish this site right now...</p>
                <br></br>
                <p>To-DO:</p>
                <ul className="list-none">
                    <li>probably to make it actually good.</li>
                    <li>Spotify has HQ images for covers- maybe I should get them from there</li>
                    <li>make it so its compatible with other screen sizes</li>
                    <li>re-style everything with tailwind - partially done</li>
                </ul>
            </aside>
            <footer className="w-full p-4 text-center sm:text-left">
                <Footer/>
            </footer>
        </div>
    );
};

export default App;