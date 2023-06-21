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
refs.Stop.setAttribute('disabled', '');
let timerId = null;

    
refs.Start.addEventListener('click', () => {
   refs.Start.setAttribute('disabled', true);
   refs.Stop.removeAttribute('disabled');
  timerId = setInterval((e) => {

    refs.body.style.backgroundColor = getRandomHexColor();
    console.log('fdaa');


  }, 1000);
});

refs.Stop.addEventListener('click', (e)=> {
  refs.Stop.setAttribute('disabled', true);
  refs.Start.removeAttribute('disabled');
  clearInterval(timerId);
});
