import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareLastfm, faSquareGithub, faSquareSteam} from '@fortawesome/free-brands-svg-icons'
const Links: React.FC = () => {
    return (
        <ul>
            <li><a href=" "><FontAwesomeIcon icon={faSquareLastfm} size="2xl"/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faSquareGithub} size="2xl"/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faSquareSteam} size="2xl"/></a></li>
        </ul>
);
};

export default Links;