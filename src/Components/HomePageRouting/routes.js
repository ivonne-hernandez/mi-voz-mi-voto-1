import { FormattedMessage } from 'react-intl';

const routes = [
  { header: 
      <FormattedMessage 
        id="homePageRouting.route1.header" 
        defaultMessage="Vote" />, 
    listItems: [
      <FormattedMessage
        id="homePageRouting.route1.listItem1"
        defaultMessage="Register to vote" />, 
      <FormattedMessage
        id="homePageRouting.route1.listItem2"
        defaultMessage="Check my voter registration" />
    ], 
    linksTo: ['/register-to-vote', '/check-my-registration'] 
  },
  { header: 
      <FormattedMessage
        id="homePageRouting.route2.header"
        defaultMessage="Know My Rights" />, 
    listItems: [
      <FormattedMessage
        id="homePageRouting.route2.listItem1"
        defaultMessage="Find out about Election Protection" />
    ], 
    linksTo: ['/election-protection']
  },
  { header: 
      <FormattedMessage
        id="homePageRouting.route3.header"
        defaultMessage="Know What Forms of ID I\'ll Need" />, 
    listItems: [
      <FormattedMessage
        id="homePageRouting.route3.listItem1"
        defaultMessage="Find out about Voter ID Laws" />
    ], 
    linksTo: ['/voter-id-laws']
  },
  { header: 
      <FormattedMessage
        id="homePageRouting.route4.header"
        defaultMessage="Get Notifications" />, 
    listItems: [
      <FormattedMessage
        id="homePageRouting.route4.listItem1"
        defaultMessage="Get notifications about upcoming elections in my state" />
    ], 
    linksTo: ['/get-notifications']
  }
];

export default routes;