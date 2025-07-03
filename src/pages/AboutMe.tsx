import React from 'react';
import {Link} from "react-router-dom";

const AboutMe: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className={"text-7xl"}>This is about me</h1>
            <Link to="/"><p className={"animate-pulse bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text text-transparent font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] hover:drop-shadow-[0_0_20px_rgba(56,189,248,1)] transition-all duration-300 cursor-pointer"}
            >GET ME OUT</p></Link>
            <p className={"text-wrap max-w-2xl mx-auto"}>
                This is an about me, its all about me! I'm Teo/zx - i code stuff! My main stuff is Python, Java, JS and a few frameworks such as react and others. I do a bit of everything?
            </p>
            <h2 className={"text-2xl"}> TO DO LIST!!! </h2>
            <ul>
                <li>Probably finish this</li>
                <li> Photography section - with extracted data</li>
                <li>Somehow link this to my Server?</li>
            </ul>
        </div>
    );
};

export default AboutMe;
