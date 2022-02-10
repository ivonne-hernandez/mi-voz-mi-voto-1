import './HomePageRoutingComponent.css';
import RouteCard from '../RouteCard/RouteCard';

const HomePageRoutingComponent = () => {
  const routes = [
    { header: 'VOTE', listItems: ['Register to vote', 'Check my voter registration', 'Find a polling place near me'], linksTo: ['/register-to-vote', '/check-registration', '/find-polling-place'] },
    { header: 'KNOW MY RIGHTS', listItems: ['Find out about Election Protection, and Voter Identification Laws in my state'], linksTo: ['/election-protection']},
    { header: 'KNOW WHAT FORMS OF ID I\'LL NEED', listItems:['Find out what types of ID I\'ll need in order to vote'], linksTo: ['/required-forms-of-id']},
    { header: 'GET NOTIFICATIONS', listItems:['Get notifications about upcoming elections in my state'], linksTo: ['/get-notifications']}
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