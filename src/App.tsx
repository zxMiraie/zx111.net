import { Analytics } from "@vercel/analytics/react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import React from "react";
import './App.css';
import Music from "./pages/Music";

const App: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/music" element={<Music/>} />
            </Routes>
            <Analytics />
        </BrowserRouter>
    )
};

export default App;