import elise from './elise.png';
import ivonne from './ivonne.jpg';
import alex from './alex.jpg';
import luis from './luis.png';
import linkedin from './linkedin.png';
import github from './github.png';
import githubOcto from './github-octo.png';
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
    githubImg: githubOcto,
    linkedin: 'https://www.linkedin.com/in/ivonne-hernandez-107b0324/',
    linkedinImg: linkedin,
    story: 
      <FormattedMessage
        id="devs1.story"
        defaultMessage="The goal of this application is to remove the language barrier that keeps a lot of Latinos from showing up to the polls. It's meant to empower the Latino community by providing election resources and information in a language they know and understand so that they too, can have their voices be heard through their vote." />
  },
  {
    key: '2',
    name: 'Alex McConnell',
    photo: alex,
    title: 
      <FormattedMessage
        id="devs2.title"
        defaultMessage="Back-End Software Developer" />,
    github: 'https://github.com/AlexMMcConnell',
    githubImg: github,
    linkedin: 'https://www.linkedin.com/in/alex-m-mcconnell/',
    linkedinImg: linkedin,
    story: 
      <FormattedMessage
        id="devs2.story"
        defaultMessage="Voter empowerment has always been something important to me as larger companies have been continually taking over the entire political hemisphere. This project is another opportunity to do just that: empower voters who may not know how to use their voices." />
  },
  {
    key: '3',
    name: 'Luis Arroyo',
    photo: luis,
    title: 
      <FormattedMessage
        id="devs3.title"
        defaultMessage="Back-End Software Developer" />,
    github: 'https://github.com/larroyo1',
    githubImg: github,
    linkedin: 'https://www.linkedin.com/in/luis-arroyo-65a954181/',
    linkedinImg: linkedin,
    story: 
      <FormattedMessage
        id="devs3.story"
        defaultMessage="Being a Latino myself, I wanted to help create a tool that encourages and helps people in my family to get out and vote." />
  },
  {
    key: '4',
    name: 'Elise Beall',
    photo: elise,
    title: 'Front-End Software Developer',
    github: 'https://github.com/elisebeall',
    githubImg: github,
    linkedin: 'https://www.linkedin.com/in/elisejbeall',
    linkedinImg: linkedin,
    story: '"As a former volunteer coordinator & field organizer of local & national political campaigns, I have seen first hand the divide created by language barriers & technical challenges.  Working on this application allowed me to focus on creating a tool to help level the playing field of electoral politics."'
  }
]

export default devs;
