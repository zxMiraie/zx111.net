import React from 'react';
import './App.css';
import NowPlaying from "./components/NowPlaying";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Footer from "./components/Footer";
import Links from "./components/Links";

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <header className="absolute top-0 left-0 p-4">
                <RecentlyPlayed/>
            </header>
            <main className="flex-grow flex items-center justify-center p-4">
                <Links/>
            </main>
            <footer className="w-full">
                <Footer/>
            </footer>
            <aside className="absolute bottom-0 right-0 p-4">
                <NowPlaying/>
            </aside>
            <aside className="absolute top-0 right-0 p-4 text-right">
                <p>I'm zx111</p>
                <p>I'm very lazy to finish this site right now...</p>
                <br></br>
                <p>To-DO:</p>
                <ul style={{listStyleType: "none"}}>
                    <li>probably to make it actually good.</li>
                    <li>Spotify has HQ images for covers- maybe I should get them from there</li>
                    <li>add links to the- uh links</li>
                    <li>add a better footer - this was suggested by copilot github BTW LOL</li>
                    <li>make it so its compatible with other screen sizes</li>
                    <li>re-style everything with tailwind - partially done</li>
                </ul>
            </aside>
        </div>
    );
};

export default App;