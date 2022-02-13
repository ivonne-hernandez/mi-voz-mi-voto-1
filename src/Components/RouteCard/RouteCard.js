import { Link } from 'react-router-dom';
import './RouteCard.css';

const RouteCard = ({ header, listItems, linksTo }) => {
  const linkTags = listItems.map((link, index) => {
    return (
      <li>
        <Link to={linksTo[index]} className="link-item" key={index}>{link}</Link>
      </li>
    );
  });

  return (
    <article className="route-card-article">
      <div className="route-card-container">
        <p className="route-card-header">{header}</p>
        <ul className="link-list">
          {linkTags}
        </ul>
      </div>
    </article>
  );
}

export default RouteCard;