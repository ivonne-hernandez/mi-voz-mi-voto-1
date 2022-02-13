import { FormattedMessage } from 'react-intl';

const routes = [
  { header: 
      <FormattedMessage 
        id="homePageRouting.header1" 
        defaultMessage="Vote"/>, 
    listItems: [
      <FormattedMessage
        id="homePageRouting.listItem1"
        defaultMessage="Register to vote" />, 
      <FormattedMessage
        id="homePageRouting.listItem2"
        defaultMessage="Check my voter registration" />
    ], 
    linksTo: ['/register-to-vote', '/check-my-registration'] 
  },

  { header: 'Know My Rights', listItems: ['Find out about Election Protection'], linksTo: ['/election-protection']},
  { header: 'Know What Forms of ID I\'ll Need', listItems:['Find out about Voter ID Laws'], linksTo: ['/voter-id-laws']},
  { header: 'Get Notifications', listItems:['Get notifications about upcoming elections in my state'], linksTo: ['/get-notifications']}
];

export default routes;