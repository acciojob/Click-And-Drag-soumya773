const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
