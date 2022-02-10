import { Link } from 'react-router-dom';
import './RouteCard.css';

const RouteCard = ({ header, listItems, linksTo }) => {
  const linkTags = listItems.map((link, index) => {
    return (
      <ul className="link-list" key={link}>
        <li>
          <Link to={linksTo[index]} className="link-item">{link}</Link>
        </li>
      </ul>
    );
  });

  return (
    <article className={`route-card-article ${header.toLowerCase().split(' ').join('-')}`}>
      <div className="route-card-container">
        <p className='route-card-header'>{header}</p>
        {linkTags}
      </div>
    </article>
  );
}

export default RouteCard;