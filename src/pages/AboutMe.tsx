import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {faMicrosoft, faPython} from "@fortawesome/free-brands-svg-icons";

const AboutMe: React.FC = () => {
    return (
        <div className="container mx-auto p-6 max-w-6xl min-h-screen flex flex-col fade-in">
            <div className="flex-grow">
                <Navbar/>

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

                <div>
                    <Card icon={faPython} color={"text-yellow-400"} name={"Python"} description={"WIP"} />
                </div>
                <div>
                    <Card icon={faMicrosoft} color={"text-green-400"} name={"C#"} description={"WIP"} />
                </div>


            </div>

            <div className="mt-auto pt-8 text-center">
                <Footer/>
            </div>
        </div>
    );
};

export default AboutMe;