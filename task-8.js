function get_random_color() {
  var r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const boxesRef = document.querySelector('#boxes');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('#controls > input');

function createBoxes(amount) {
  const divsArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement('div');
    divRef.style.width = i * 10 + 30 + 'px';
    divRef.style.height = i * 10 + 30 + 'px';
    divRef.style.backgroundColor = get_random_color();
    divsArray.push(divRef);
  }
  boxesRef.append(...divsArray);
}

renderRef.addEventListener('click', () => {
  createBoxes(inputRef.value);
});

destroyRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
});
