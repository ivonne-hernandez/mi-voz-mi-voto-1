import devs from '../../Assets/devs.js';
import './DevStories.css';

const DevStories = () => {
  const devDetails = devs.map(dev => {
    return (
      <article className="dev-container" key={dev.key}>
        <div className="dev-photo-container">
          <img
            className={`dev-photo ${dev.name.split(' ')[0]}`}
            src={dev.photo}
            alt={dev.name} />
        </div>
        <div className="dev-bio-container">
          <div className="dev-header">
            <h2 className="dev-name">{dev.name}</h2>
            <h3 className="dev-title">{dev.title}</h3>
          </div>
          <p className="dev-story">{dev.story}</p>
          <div className="dev-links-container">
            <a
              href={dev.linkedin}
              target="_blank"
              rel="noopener"
              aria-describedby="new-window-2">
              <img
                className={`dev-linkedin ${dev.name.split(' ')[0]}`}
                src={dev.linkedinImg}
                alt={`linkedin for ${dev.name}`} />
            </a>
            <a
              href={dev.github}
              target="_blank"
              rel="noopener"
              aria-describedby="new-window-2">
              <img
                className={`dev-github ${dev.name.split(' ')[0]}`}
                src={dev.githubImg}
                alt={`github for ${dev.name}`} />
            </a>
          </div>
        </div>
      </article>
    )
  })

  return (
    <section className="all-devs-container">
      {devDetails}
    </section>
  )
}

export default DevStories;
