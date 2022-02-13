import { Fragment } from 'react';
import devs from '../../Assets/devs.js';
import appStory from '../../Assets/appStory.js';
import linkedin from '../../Assets/linkedin.png';
import github from '../../Assets/github.png';
import githubOcto from '../../Assets/github-octo.png';
import './DevStories.css';

const DevStories = () => {

  const devDetails = devs.map(dev => {
    return (
      <article className="dev-container" key={dev.key}>
        <div className="dev-photo-container">
          <img className="dev-photo" src={dev.photo} alt={dev.name} />
        </div>
        <div className="dev-bio-container">
          <div className="dev-header">
            <h2 className="dev-name">{dev.name}</h2>
            <h3 className="dev-title">{dev.title}</h3>
          </div>
          <p className="dev-story">{dev.story}</p>
          <div className="dev-links">
            <a href={dev.linkedin} target="_blank" rel="noopener">
              <img className="dev-linkedin" src={linkedin} alt={`linkedin for ${dev.name}`} />
            </a>
            <a href={dev.github} target="_blank" rel="noopener">
              {dev.name === 'Ivonne Hernandez' ?
                <img className="dev-github" src={githubOcto} alt={`github for ${dev.name}`} /> :
                <img className="dev-github" src={github} alt={`github for ${dev.name}`} />
              }
            </a>
          </div>
        </div>
      </article>
    )
  })

  const appDetails = () => {
    const { title, text } = appStory;

    return (
      <>
        <h1>{title}</h1>
        <p className="app-story-text">{text}</p>
      </>
    )
  }

  return(
    <div className="our-story-container">
      <section className="app-story-container">
        {appDetails()}
      </section>
      <section className="all-devs-container">
        {devDetails}
      </section>
    </div>
  )
}

export default DevStories;
