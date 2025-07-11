import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareLastfm, faSquareGithub, faSquareSteam, faFlickr} from '@fortawesome/free-brands-svg-icons'
const Links: React.FC = () => {
    return (
        <ul>
            <li><a href="https://www.last.fm/user/zx111"><FontAwesomeIcon icon={faSquareLastfm} size="2xl"/></a></li>
            <li><a href="https://github.com/zxMiraie"><FontAwesomeIcon icon={faSquareGithub} size="2xl"/></a></li>
            <li><a href="https://steamcommunity.com/id/zx111/"><FontAwesomeIcon icon={faSquareSteam} size="2xl"/></a></li>
            <li><a href="https://www.flickr.com/photos/202230096@N02/"><FontAwesomeIcon icon={faFlickr} size="2xl"/></a></li>
        </ul>
);
};

export default Links;