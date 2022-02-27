import elise from './elise.png';
import ivonne from './ivonne.jpg';
import linkedin from './linkedin.png';
import github from './github.png';
import { FormattedMessage } from 'react-intl';

const devs = [
  {
    key: '1',
    name: 'Ivonne Hernandez',
    photo: ivonne,
    title: 
      <FormattedMessage
        id="devs1.title"
        defaultMessage="Front-End Software Developer" />,
    github: 'https://github.com/ivonne-hernandez',
    githubImg: github,
    linkedin: 'https://www.linkedin.com/in/ivonne-hernandez-107b0324/',
    linkedinImg: linkedin,
    story: 
      <FormattedMessage
        id="devs1.story"
        defaultMessage="The goal of this application is to remove the language barrier that keeps a lot of Latinos from showing up to the polls. It's meant to empower the Latino community by providing election resources and information in a language they know and understand so that they too, can have their voices be heard through their vote." />
  },
  {
    key: '4',
    name: 'Elise Beall',
    photo: elise,
    title: 
      <FormattedMessage
        id="devs4.title"
        defaultMessage="Front-End Software Developer" />,
    github: 'https://github.com/elisebeall',
    githubImg: github,
    linkedin: 'https://www.linkedin.com/in/elisejbeall',
    linkedinImg: linkedin,
    story: 
      <FormattedMessage
        id="devs4.story"
        defaultMessage="As a former volunteer coordinator & field organizer of local & national political campaigns, I have seen first hand the divide created by language barriers & technical challenges.  Working on this application allowed me to focus on creating a tool to help level the playing field of electoral politics." />
  }
];

export default devs;
