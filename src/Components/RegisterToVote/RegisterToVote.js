import { useLocation } from 'react-router-dom';
import './RegisterToVote.css';

const RegisterToVote = () => {
  let location = useLocation();
 
  const setIFrameSrcUrl = () => {
    if (location.pathname === '/register-to-vote') {
      return "https://register.vote.org/?partner=111111&campaign=free-tools";
    } else if (location.pathname === '/check-my-registration') {
      return "https://verify.vote.org/?partner=111111&campaign=free-tools";
    }
  }

  return (
    <div className="register-to-vote-form">
      <iframe className="register-to-vote-i-frame"
        src={setIFrameSrcUrl()}
        id="frame1"
        scrollable="no"
        scrolling="no"
        title="register-to-vote-form"
      />
    </div>
  );
}

export default RegisterToVote;