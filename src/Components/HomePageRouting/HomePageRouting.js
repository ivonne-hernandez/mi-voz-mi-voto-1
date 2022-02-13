import { FormattedMessage } from 'react-intl';
import RouteCard from '../RouteCard/RouteCard';
import './HomePageRouting.css';

const HomePageRoutingComponent = () => {
  const routes = [
    { header: 'Vote', listItems: ['Register to vote', 'Check my voter registration'], linksTo: ['/register-to-vote', '/check-my-registration'] },
    { header: 'Know My Rights', listItems: ['Find out about Election Protection'], linksTo: ['/election-protection']},
    { header: 'Know What Forms of ID I\'ll Need', listItems:['Find out about Voter ID Laws'], linksTo: ['/voter-id-laws']},
    { header: 'Get Notifications', listItems:['Get notifications about upcoming elections in my state'], linksTo: ['/get-notifications']}
  ];

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
    <main className='home-page-routing-component-container'>
      <p className='i-want-to-header'>I want to...</p>
      <div className='home-page-route-cards-container'>
      {displayRouteCards()}
      </div>
    </main>
  );
}

export default HomePageRoutingComponent;