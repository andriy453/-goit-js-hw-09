const refs = {
  Start: document.querySelector('[data-start]'),
  Stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
console.log(refs.Start);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId = null;
refs.Start.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    console.log('fdaa');
  }, 1000);
});

refs.Stop.addEventListener('click', () => {
  clearInterval(timerId);
});
