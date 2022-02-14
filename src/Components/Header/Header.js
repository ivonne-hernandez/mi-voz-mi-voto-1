import { Link, useNavigate } from 'react-router-dom';
import voteImage from '../../Assets/vote.png';
import './Header.css';

const Header = ()  => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <img
        className="vote-image"
        src={voteImage}
        alt="vote"
        role="button"
        focusable="true"
        onClick={() => navigate('/')} />
      <Link className="app-name" to="/">
        <h1 className="app-name">My Voice, My Vote</h1>
      </Link>
      <button
        className="our-story-button header-button"
        onClick={() => navigate('/our-story')}>
        Our Story
      </button>
      <button className="en-espanol-button header-button">
        En Español
      </button>
    </header>
  );
}

export default Header;
