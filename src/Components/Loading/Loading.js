import './Loading.css';
import loading from '../../Assets/loading.png';

const Loading = () => {
  return (
    <div className="loading-icon-container">
      <img className="loading-icon" src={loading} alt="loading icon" />
    </div>
  )
}

export default Loading;
