import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GlitchText from './GlitchText';

const Navbar: React.FC = () => {
  const location = useLocation();

  // Function to determine if a route is active
  const isActive = (path: string) => location.pathname === path;

  // Words to cycle through in the glitch text based on current page
  const getGlitchWords = () => {
    switch(location.pathname) {
      case '/about':
        return ['About Me', 'Who am I?', 'zx111'];
      case '/music':
        return ['Music', 'Tunes', 'zx111'];
      default:
        return ['zx111', 'developer', 'music'];
    }
  };

  return (
    <nav className="mb-1 py-1">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-mono">
          <GlitchText wordsList={getGlitchWords()} glitchInterval={1000} />
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`transition-all duration-300 hover:text-gray-300 ${isActive('/') ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`transition-all duration-300 hover:text-gray-300 ${isActive('/about') ? 'border-b-2 border-white' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/music"
              className={`transition-all duration-300 hover:text-gray-300 ${isActive('/music') ? 'border-b-2 border-white' : ''}`}
            >
              Music
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
