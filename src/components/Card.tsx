import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";


interface CardProps {
    name: string;
    icon?: IconDefinition;
    description: string;
    color: string;
}

const Card: React.FC<CardProps> = ({ name, icon, description, color }) => {
    return (
        <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
                {icon && (
                    <FontAwesomeIcon
                        icon={icon}
                        className={`text-2xl mr-3 ${color || 'text-white'}`}
                    />
                )}
                <h3 className="text-xl font-semibold text-white">{name}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
    );
};


export default Card;