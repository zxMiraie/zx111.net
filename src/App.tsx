import React from 'react';
import './App.css';
import NowPlaying from "./components/NowPlaying.tsx";
import RecentlyPlayed from "./components/RecentlyPlayed.tsx";
import Footer from "./components/Footer.tsx";
import Links from "./components/Links.tsx";


const App: React.FC = () => {
    return (
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div style={{position: 'absolute', bottom: 5, right: 15, padding: 10}}>
                <NowPlaying/>
            </div>
            <div style={{position: "absolute", top:0, left:10,}}>
                <RecentlyPlayed/>
            </div>
            <div>
                <Links/>
            </div>
            <div style={{position: 'absolute', top: 20, right: 10, textAlign: "right"}}>
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
                    <li>re-style everything with tailwind</li>
                </ul>
            </div>
            <footer style={{position: 'absolute', bottom:0, left: 0}}><Footer/></footer>
        </div>
    );
};

export default App;