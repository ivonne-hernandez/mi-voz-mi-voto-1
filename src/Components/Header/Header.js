import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import voteImage from '../../Assets/vote.png';
import './Header.css';

const Header = ()  => {
  return (
    <header className="header-container">
      <img className="vote-image" src={voteImage} alt="vote"/>
      <Link className="app-name" to="/">
        <FormattedMessage 
          id="header.appName"
          defaultMessage="My Voice, My Vote"
        />
      </Link>
      <button className="our-story-button header-button">
        <FormattedMessage
          id="header.ourStoryButton"
          defaultMessage="Our Story"
        />
      </button>
      <button
        className="en-espanol-button header-button">
        En Español
      </button>
    </header>
  );
}

export default Header;
