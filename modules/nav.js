const navItems = document.querySelectorAll('.nav-items');
const movieSection = document.getElementById('movie-section');
const episodeSection = document.getElementById('episode-section');
const contactSection = document.getElementById('contact-section');

export const showComponent = (componentId) => {
  switch (componentId) {
    case 'movie-section':
      movieSection.classList.add('visible');
      episodeSection.classList.remove('visible');
      contactSection.classList.remove('visible');
      break;
    case 'episode-section':
      movieSection.classList.remove('visible');
      episodeSection.classList.add('visible');
      contactSection.classList.remove('visible');
      break;
    case 'contact-section':
      movieSection.classList.remove('visible');
      episodeSection.classList.remove('visible');
      contactSection.classList.add('visible');
      break;
    default:
      break;
  }
};

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (event) => {
    const componentId = event.target.getAttribute('showComponent');
    showComponent(componentId);
  });
});

export default showComponent;