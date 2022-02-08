import './RegisterToVote.css';

const RegisterToVote = () => {
  const iframeScript = () => {
    var config = {
      "logo": {"type":"default"},
      "official-only": true
    };
    let loadVIT = function () {
      if (typeof vit !== 'undefined'){
        vit.core.init("_vit", config);
      } else {
        setTimeout(loadVIT, 500);
      };
    };
    loadVIT();
  }
  return (
    <div>
    <div id="_vit" style="min-width: 360px; max-width: 640px; height: 480px;"></div>
    <script>
      {this.iframeScript()}
    </script>
  </div>
  )
}

export default RegisterToVote;