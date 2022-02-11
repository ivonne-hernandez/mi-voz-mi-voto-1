import { Fragment } from 'react';
import devs from '../../Assets/devs.js';
import linkedin from '../../Assets/linkedin.png';
import github from '../../Assets/github.png';
import githubOcto from '../../Assets/github-octo.png';
import './DevStories.css';

const DevStories = () => {
  const devSquares = devs.map(dev => {
    return (
      <article className="dev-container">
        <img className="dev-photo" src={dev.photo} alt={dev.name} />
        <div className="dev-bio">
          <h2 className="dev-name">{dev.name}</h2>
          <h3 className="dev-title">{dev.title}</h3>
          <a className="dev-linkedin icon" href={dev.linkedin}>
            <img src={linkedin} alt={`linkedin for ${dev.name}`} />
          </a>
          <a className="dev-github icon" href={dev.github}>
            {dev.name === 'Ivonne Hernandez' ?
              <img src={githubOcto} alt={`github for ${dev.name}`} /> :
              <img src={github} alt={`github for ${dev.name}`} />
            }
          </a>
        </div>
        <p className="dev-story">{dev.story}</p>
      </article>
    )
  })

  return(
    <>
      <section>
        <h1>The Story Behind 'Mi Voz, Mi Voto'</h1>
        <p className="app-story">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum dapibus enim at sollicitudin. Proin ac mattis risus. Maecenas iaculis eros vitae enim semper, at egestas massa mattis. Maecenas mattis pharetra magna, viverra sollicitudin tellus pharetra quis. Vestibulum tincidunt congue arcu in laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac malesuada sapien. Aliquam consectetur felis semper velit ullamcorper, sit amet porttitor sem semper. Duis vehicula et nisi vel tempus. Suspendisse nunc diam, porta vulputate ultrices quis, consequat eu leo. Proin nisi quam, semper nec arcu in, semper interdum magna. Cras aliquet fermentum lacus vel posuere.</p>
      </section>
      <section className="all-devs-container">
        {devSquares}
      </section>
    </>
  )
}

export default DevStories;
