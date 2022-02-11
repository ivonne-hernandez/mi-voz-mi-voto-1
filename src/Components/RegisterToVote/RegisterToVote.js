import './RegisterToVote.css';

const RegisterToVote = () => {
  return (
    <div className="register-to-vote-form">
      <iframe className="register-to-vote-i-frame"
        src="https://register.vote.org/?partner=111111&campaign=free-tools" 
        id="frame1"
        scrollable="no"
        scrolling="no"
        title="register-to-vote-form"
      />
      <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.min.js"></script>
    </div>
  );
}

export default RegisterToVote;