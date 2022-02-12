import './ElectionProtection.css';

const ElectionProtection = () => {
  return (
    <div className="election-protection-container">
      <h2 className="election-protection-title">Election Protection</h2>
      <h3 className="election-protection-sub-title">Protect your right to vote by following these basic guidelines:</h3>
      <article className="article-content">
        <ol>
          <li className="list-item">
            Before heading out to the polls, make sure to check what forms of ID will be required in order to be able to vote in your specific state. You can verify the valid forms of ID that are accepted in your state
              <a className="link-to-voter-id-laws"
                href="https://www.vote.org/voter-id-laws/">
                here
              </a>.  
          </li>
          <li className="list-item">
            Make sure to bring your phone with you so that you're able to call the election protection hotline at 866-687-8683 if necessary, and record any illegal activities that you witness.
          </li>
          <li className="list-item">
            Try your best to keep your place in line. You are allowed to cast your ballot as long as you're in line before the polls close, but if you leave the line you may not be allowed to vote upon your return. 
          </li>
          <li className="list-item">
            Try your best to vote on a regular ballot. Only cast a provisional ballot if you don't have any other option. Unfortunately, many states will not count a provisional ballot if it was casted at the wrong polling location.
          </li>
          <li className="list-item">
            If any issues arise at the polling site do your best to resolve them then and there. Keep in mind that most poll workers are genuinely trying their best, but they're human too and humans sometimes make mistakes.
          </li>
        </ol>
      </article>
    </div>
  );
}

export default ElectionProtection;