import './HomePageRouting.css';
import RouteCard from '../RouteCard/RouteCard';

const HomePageRoutingComponent = () => {
  const routes = [
    { header: 'Vote', listItems: ['Register to vote', 'Check my voter registration', 'Find a polling place near me'], linksTo: ['/register-to-vote', '/check-registration', '/find-polling-place'] },
    { header: 'Know My Rights', listItems: ['Find out about Election Protection, and Voter Identification Laws in my state'], linksTo: ['/election-protection']},
    { header: 'Know What Forms of ID I\'ll Need', listItems:['Find out what types of ID I\'ll need in order to vote'], linksTo: ['/required-forms-of-id']},
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