import './VoterIdLaws.css';

const VoterIdLaws = () => {
  return (
    <div className="voter-id-laws-container">
      <h2 className="voter-id-laws-title">Voter ID Laws</h2>
      <h3 className="voter-id-laws-sub-title">If someone is preventing you from being able to vote for not having the proper ID:</h3>
      <article className="article-content">
        <ul>
          <li className="list-item">
            <a className="link-to-voter-id-laws"
              href="https://www.vote.org/voter-id-laws/"
              target="_blank"
              rel="noopener">
              Check what forms of ID are required in your state.
            </a>
          </li>
          <li className="list-item">
            Ask the poll worker if there are other forms of ID that they'll accept. Some states accept a paystub or utility bill with your name and address as a valid form of ID. If you need to retrieve your ID from home, ask the poll worker if you can skip the line upon your return to the polling site. If you're not able to return the same day, ask the poll worker if your state allows you to come back and show your ID following Election Day and still have your vote counted.
          </li>
          <li className="list-item">
            If you don't have a valid form of ID on hand, ask the poll worker if your state allows you to vote without an ID by signing something under oath. States like CT, ID, IA, LA, MI, MT, NH, SD, TN allow this in lieu of an ID.
          </li>
          <li className="list-item">
            If you have no other choice, cast a provisional ballot. Some states that require ID will count your provisional ballot if your signature matches what's on file in the voter registry.
          </li>
        </ul>
      </article>
    </div>
  );
}

export default VoterIdLaws;
