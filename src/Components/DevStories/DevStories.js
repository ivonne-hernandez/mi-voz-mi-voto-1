import { Fragment } from 'react';
import devs from '../Assets/devs.js';
import { BsLinkedin as LinkedIn } from 'react-icons/bs';
import { BsGithub as GitHub } from 'react-icons/bs'
import './DevStories.css';

const DevStories = () => {
  const devStory = devs.map(dev => {
    return (
      <>
        <h2 className="dev-name">{dev.name}</h2>
        <h3 className="dev-title">{dev.title}</h3>
        <img className="dev-photo" src={dev.photo} alt={dev.name} />
        <a className="dev-linkedin" href={dev.linkedin}>{LinkedIn}</a>
        <a className="dev-github" href={dev.github}>{GitHub}</a>
        <p className="dev-bio">{dev.bio}</p>
      </>
    )
  })

  return(
    <>
      <h1>The Story Behind 'Mi Voz, Mi Voto'</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum dapibus enim at sollicitudin. Proin ac mattis risus. Maecenas iaculis eros vitae enim semper, at egestas massa mattis. Maecenas mattis pharetra magna, viverra sollicitudin tellus pharetra quis. Vestibulum tincidunt congue arcu in laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac malesuada sapien. Aliquam consectetur felis semper velit ullamcorper, sit amet porttitor sem semper. Duis vehicula et nisi vel tempus. Suspendisse nunc diam, porta vulputate ultrices quis, consequat eu leo. Proin nisi quam, semper nec arcu in, semper interdum magna. Cras aliquet fermentum lacus vel posuere.</p>
      {devStory}
    </>
  )
}

export default DevStories;
