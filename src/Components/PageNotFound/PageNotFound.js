import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
import notFound from '../../Assets/placeholder.jpeg';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found-container">
      <img src={notFound} alt="error" />
      <h2>Sorry, we can't seem to find the page you're looking for, please try again.</h2>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default PageNotFound;
