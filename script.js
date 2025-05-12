// Your code here.
const container = document.getElementById('container');
const cubes = document.querySelectorAll('.cube');
let selected = null;
let offsetX, offsetY;

cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    selected = cube;
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;
    cube.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', (e) => {
  if (selected) {
    const containerRect = container.getBoundingClientRect();
    const cubeWidth = selected.offsetWidth;
    const cubeHeight = selected.offsetHeight;

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    // Boundaries
    x = Math.max(0, Math.min(container.offsetWidth - cubeWidth, x));
    y = Math.max(0, Math.min(container.offsetHeight - cubeHeight, y));

    selected.style.left = `${x}px`;
    selected.style.top = `${y}px`;
  }
});

document.addEventListener('mouseup', () => {
  if (selected) {
    selected.style.cursor = 'grab';
    selected = null;
  }
});
