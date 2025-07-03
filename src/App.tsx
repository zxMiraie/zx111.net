import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import React from "react";
import './App.css';

const App: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutMe />} />
            </Routes>
            <SpeedInsights />
            <Analytics />
        </BrowserRouter>
    )
};

export default App;