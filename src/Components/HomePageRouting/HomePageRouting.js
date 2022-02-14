import { FormattedMessage } from 'react-intl';
import RouteCard from '../RouteCard/RouteCard';
import './HomePageRouting.css';
import routes from './routes.js';

const HomePageRoutingComponent = () => {
  const displayRouteCards = () => {
    const routeCards = routes.map((route, index) => {
      return (
        <RouteCard className="route-card"
          header={route.header}
          listItems={route.listItems}
          linksTo={route.linksTo}
          key={index}
        />
      );
    });
    return routeCards;
  }

  return (
    <body className='home-page-routing-component-container'>
      <h2 className='i-want-to-header'>
        <FormattedMessage id="homePageRouting.header" defaultMessage="I want to..."/>
      </h2>
      <div className='home-page-route-cards-container'>
      {displayRouteCards()}
      </div>
    </body>
  );
}

export default HomePageRoutingComponent;
