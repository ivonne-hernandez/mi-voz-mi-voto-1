import { FormattedMessage } from 'react-intl';
import './Error.css';
import noVoice1 from '../../Assets/no-voice1.png';

const Error = ({ error }) => {
  return (
    <div className="error-container">
      <img className="error-image" src={noVoice1}
        alt="microphone with horizontal strikethrough" />
      <h3 className="error-text">
        <FormattedMessage
          id="error.sorryMessage"
          defaultMessage="We're sorry, please try again." />
      </h3>
      <h4 className="error-text">{error}</h4>
    </div>
  );
}

export default Error;
