import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Music: React.FC = () => {
    return (
        <div className="container mx-auto p-6 max-w-6xl min-h-screen flex flex-col fade-in">
            <div className="flex-grow">
                <Navbar />

                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold mb-8">Music</h1>
                    <p className="text-lg mb-4">This page is under construction.</p>
                    <p className="text-lg">Check back later for updates!</p>
                </div>
            </div>

            <div className="mt-auto pt-8 text-center">
                <Footer />
            </div>
        </div>
    );
};

export default Music;