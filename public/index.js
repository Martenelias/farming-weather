const menuToggle = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');
const weatherContainer = document.querySelector('.weather-container');
const burgerSpan = document.querySelectorAll('.hamburger span');
const aboutContainer = document.querySelector('.about-container');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuToggle.classList.toggle('open');
  showcase.classList.toggle('active');
  weatherContainer.classList.toggle('active');
  aboutContainer.classList.toggle('active');

  if (weatherContainer.classList.contains('active') || aboutContainer.classList.contains('active')) {
    burgerSpan.forEach((span) => {
      const newSpan = span;
      newSpan.style.backgroundColor = '#333';
    });
  } else {
    burgerSpan.forEach((span) => {
      const newSpan = span;
      newSpan.style.backgroundColor = '#fff';
    });
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const showcaseHeight = showcase.offsetHeight;
  const weatherContainerHeight = weatherContainer.offsetHeight;

  const startWeatherReveal = showcaseHeight - windowHeight;
  const endWeatherReveal = showcaseHeight + weatherContainerHeight;

  if (scrollPosition <= startWeatherReveal && scrollPosition >= showcaseHeight) {
    weatherContainer.style.transform = 'translateY(0)';
    weatherContainer.style.position = 'fixed';
    weatherContainer.style.top = 0;
    weatherContainer.style.left = 0;
    weatherContainer.style.width = '100%';
  } else if (scrollPosition < showcaseHeight && scrollPosition >= endWeatherReveal) {
    weatherContainer.style.position = 'fixed';
    weatherContainer.style.transform = 'translateY(0)';
  } else {
    weatherContainer.style.transform = 'translateY(100%)';
    weatherContainer.style.position = 'relative';
  }

  const startAboutReveal = endWeatherReveal - windowHeight;

  if (scrollPosition <= startAboutReveal && scrollPosition >= endWeatherReveal) {
    aboutContainer.style.transform = 'translateY(0)';
    aboutContainer.style.position = 'fixed';
    aboutContainer.style.top = 0;
    aboutContainer.style.left = 0;
    aboutContainer.style.width = '100%';
  } else if (scrollPosition > endWeatherReveal) {
    aboutContainer.style.position = 'relative';
    aboutContainer.style.transform = 'translateY(0)';
  } else {
    aboutContainer.style.transform = 'translateY(100%)';
    aboutContainer.style.position = 'relative';
  }
});
