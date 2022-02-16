import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
import notFound from '../../Assets/404-error.png';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found-container">
      <img src={notFound} alt="white sign with blue header and text reading 404" />
      <h2>
        <FormattedMessage
          id="pageNotFound.message"
          defaultMessage="Sorry, we can't seem to find the page you're looking for, please try again." />
      </h2>
      <button onClick={() => navigate('/')}>
        <FormattedMessage
          id="pageNotFound.button"
          defaultMessage="Home" />
      </button>
    </div>
  );
}

export default PageNotFound;
