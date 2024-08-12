const menuToggle = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');
const weatherContainer = document.querySelector('.weather-container');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuToggle.classList.toggle('open');
  showcase.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const showcaseHeight = showcase.offsetHeight;

  // Calculate when the second section should start appearing
  const startReveal = showcaseHeight - windowHeight;
  const endReveal = showcaseHeight;

  if (scrollPosition >= startReveal && scrollPosition <= endReveal) {
    // Calculate the progress of the scroll between startReveal and endReveal
    const progress = (scrollPosition - startReveal) / (endReveal - startReveal);

    // Update the transform and opacity based on progress
    weatherContainer.style.transform = `translateY(${100 - progress * 100}%)`;
    weatherContainer.style.opacity = progress;
  } else if (scrollPosition > endReveal) {
    // Once fully visible, the second section stays in place
    weatherContainer.style.transform = 'translateY(0)';
    weatherContainer.style.opacity = 1;

    // Pin the weather container to the top
    weatherContainer.style.position = 'fixed';
    weatherContainer.style.top = 0;
    weatherContainer.style.left = 0;
    weatherContainer.style.width = '100%';
  } else {
    // Reset if scrolling back up
    weatherContainer.style.transform = 'translateY(100%)';
    weatherContainer.style.opacity = 0;

    // Reset the fixed positioning
    weatherContainer.style.position = 'relative';
  }
});
