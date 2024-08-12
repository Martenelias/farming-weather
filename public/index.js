const menuToggle = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');
const weatherContainer = document.querySelector('.weather-container');
const heading = document.querySelector('header h1');
const burgerSpan = document.querySelectorAll('.hamburger span');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuToggle.classList.toggle('open');
  showcase.classList.toggle('active');
  weatherContainer.classList.toggle('active');

  if (weatherContainer.classList.contains('active')) {
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

  // Calculate when the second section should start appearing
  const startReveal = showcaseHeight - windowHeight;
  const endReveal = showcaseHeight;

  if (scrollPosition >= startReveal && scrollPosition <= endReveal) {
    if (scrollPosition > endReveal) {
      weatherContainer.style.transform = 'translateY(0)';
      weatherContainer.style.position = 'fixed';
      weatherContainer.style.top = 0;
      weatherContainer.style.left = 0;
      weatherContainer.style.width = '100%';
    } else {
      weatherContainer.style.transform = 'translateY(100%)';
      weatherContainer.style.position = 'relative';
    }
  }
  if (scrollPosition >= startReveal) {
    heading.style.color = '#333';
    burgerSpan.forEach((span) => {
      const newSpan = span;
      newSpan.style.backgroundColor = '#333';
    });
  } else {
    heading.style.color = '#fff';
    burgerSpan.forEach((span) => {
      const newSpan = span;
      newSpan.style.backgroundColor = '#fff';
    });
  }
});
