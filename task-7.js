const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

controlRef.addEventListener('change', e => {
  textRef.style.fontSize = e.target.value + 'px';
});
