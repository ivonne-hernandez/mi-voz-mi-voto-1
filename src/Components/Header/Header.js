import { useNavigate } from 'react-router-dom';
import voteImage from '../../Assets/vote.png';
import './Header.css';

const Header = ()  => {
  let navigate = useNavigate();

  return (
    <div className="header-container">
      <img
        className="vote-image"
        src={voteImage}
        alt="vote"/>
      <p className="app-name" 
        onClick={() => navigate("/")}>
        My Voice, My Vote
      </p>
      <button
        className="our-story-button header-button">
        Our Story
      </button>
      <button
        className="en-espanol-button header-button">
        En Español
      </button>
    </div>
  );
}

export default Header;
