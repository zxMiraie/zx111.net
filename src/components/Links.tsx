import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareLastfm, faSquareGithub, faSquareSteam, faFlickr} from '@fortawesome/free-brands-svg-icons'

const Links: React.FC = () => {
    return (
        <ul className="flex space-x-2 items-center">
            <li><a href="https://www.last.fm/user/zx111" className="hover:opacity-70 transition-opacity"><FontAwesomeIcon icon={faSquareLastfm} size="2xl"/></a></li>
            <li><a href="https://github.com/zxMiraie" className="hover:opacity-70 transition-opacity"><FontAwesomeIcon icon={faSquareGithub} size="2xl"/></a></li>
            <li><a href="https://steamcommunity.com/id/zx111/" className="hover:opacity-70 transition-opacity"><FontAwesomeIcon icon={faSquareSteam} size="2xl"/></a></li>
            <li><a href="https://www.flickr.com/photos/202230096@N02/" className="hover:opacity-70 transition-opacity"><FontAwesomeIcon icon={faFlickr} size="2xl"/></a></li>
        </ul>
    );
};

export default Links;