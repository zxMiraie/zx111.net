import React from 'react';
import {Link} from "react-router-dom";

const AboutMe: React.FC = () => {
    return (
        <div className="text-center py-12 px-4">
            <h1 className="text-7xl font-bold mb-4">This is about me</h1>

            <p className="text-wrap max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-200">
                This is an about me, its all about me! I'm Teo/zx - i code stuff! My main stuff is Python, Java, JS and a few frameworks such as react and others. I do a bit of everything?
            </p>

            <div className="max-w-md mx-auto text-left bg-white/5 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-6 text-center">TO DO LIST!!!</h2>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <span className="text-teal-400 mr-3">✓</span>
                        Probably finish this
                    </li>
                    <li className="flex items-center">
                        <span className="text-teal-400 mr-3">✓</span>
                        Photography section - with extracted data
                    </li>
                    <li className="flex items-center">
                        <span className="text-teal-400 mr-3">✓</span>
                        Somehow link this to my Server?
                    </li>
                </ul>
            </div>

            <Link to="/" className="inline-block mt-12">
                <p className="animate-pulse bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text text-transparent font-bold text-lg drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] hover:drop-shadow-[0_0_20px_rgba(56,189,248,1)] transition-all duration-300">
                    GET ME OUT
                </p>
            </Link>
        </div>
    );
};

export default AboutMe;