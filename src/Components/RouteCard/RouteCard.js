import { Link } from 'react-router-dom';
import './RouteCard.css';

const RouteCard = ({ header, listItems, linksTo }) => {
  const linkTags = listItems.map((link, index) => {
    return (
      <li key={index}>
        <Link to={linksTo[index]} className="link-item">{link}</Link>
      </li>
    );
  });

  return (
    <article className="route-card-article">
      <div className="route-card-container">
        <h2 className="route-card-header">{header}</h2>
        <ul className="link-list">
          {linkTags}
        </ul>
      </div>
    </article>
  );
}

export default RouteCard;
