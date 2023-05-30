const name = document.querySelector('.name');
window.addEventListener('mousemove', (e) => {
  name.style.setProperty('--x', e.clientX + 'px');
  name.style.setProperty('--y', e.clientY + 'px');
})
// Path: style.css