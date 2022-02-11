import { Link } from 'react-router-dom';
import voteImage from '../../Assets/vote.png';
import './Header.css';

const Header = ()  => {
  return (
    <div className="header-container">
      <img
        className="vote-image"
        src={voteImage}
        alt="vote"/>
      <p className="app-name">My Voice, My Vote</p>
      <Link path="/about">
        <button
          className="our-story-button header-button">
          Our Story
        </button>
      </Link>
      <button
        className="en-espanol-button header-button">
        En Español
      </button>
    </div>
  );
}

export default Header;
