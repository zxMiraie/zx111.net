import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutMe: React.FC = () => {
    return (
        <div className="container mx-auto p-6 max-w-6xl min-h-screen flex flex-col fade-in">
            <div className="flex-grow">
                <Navbar />

                <div className="mb-12 max-w-3xl mx-auto">
                    <p className="mb-4">
                        This is an about me, its all about me!
                    </p>
                    <p className="mb-4">
                        I'm Teo/zx - i code stuff!
                        My main stuff is Python, Java, TypeScript and a few frameworks such as React.
                    </p>
                    <p className="mb-4">
                        I'm currently learning some other languages - however this might take a while...
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-12 bg-white/5 p-8 rounded-lg shadow-md backdrop-blur-sm">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2">TO DO LIST!!!</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="text-red-400 mr-3">✓</span>
                            Probably finish this
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-400 mr-3">✓</span>
                            Photography section - with extracted data
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-400 mr-3">✓</span>
                            Somehow link this to my Server?
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-400 mr-3">✓</span>
                            Clean up the front page - add proper structure
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-auto pt-8 text-center">
                <Footer/>
            </div>
        </div>
    );
};

export default AboutMe;