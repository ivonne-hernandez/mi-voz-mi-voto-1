import { useNavigate } from 'react-router-dom';
import './RouteCard.css';

const RouteCard = ({ header, listItems, linksTo }) => {
  let navigate = useNavigate();
  const linkTags = listItems.map((link, index) => {
    return (
      <ul className="link-list" key={link}>
        <li className="link-item"
          onClick={() => {
            navigate(linksTo[index])}
          }>
         {link}
        </li>
      </ul>
    );
  });

  return (
    <article className="route-card-article">
      <div className="route-card-header">
        {header}
        {linkTags}
      </div>
    </article>
  );
}

export default RouteCard;