import { useContext } from 'react';
import { Context } from '../Wrapper';
import { FormattedMessage } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';
import voteImage from '../../Assets/vote.png';
import './Header.css';

const Header = ()  => {
  const context = useContext(Context);
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
      <Link to="/">
        <h1 className="app-name">
          <FormattedMessage 
            id="header.appName"
            defaultMessage="My Voice, My Vote"
          />
        </h1>
      </Link>
      <button 
        className="our-story-button header-button"
        onClick={() => navigate('/our-story')}>
        <FormattedMessage
          id="header.ourStoryButton"
          defaultMessage="Our Story"
        />
      </button>
      <select
        className="en-espanol-button header-button"
        value={context.locale}
        onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="es">Español</option>
      </select>
    </header>
  );
}

export default Header;