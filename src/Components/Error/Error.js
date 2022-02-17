import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import './Error.css';
import noVoice1 from '../../Assets/no-voice1.png';

const Error = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <img className="error-image" src={noVoice1}
        alt="microphone with horizontal strikethrough" />
      <h4 className="error-text">Error: {error}</h4>
      <h3 className="error-text">
        <FormattedMessage
          id="error.sorryMessage"
          defaultMessage="We're sorry, please try again." />
      </h3>
      <button className="home-button" onClick={() => navigate('/')}>
        <FormattedMessage
          id="pageNotFound.button"
          defaultMessage="Home" />
      </button>
    </div>
  );
}

export default Error;
