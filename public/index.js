const menuToggle = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuToggle.classList.toggle('open');
  showcase.classList.toggle('active');
});
