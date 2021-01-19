let counterValue = 0;
const spanRef = document.querySelector('#value');

const incrementRef = document.querySelector('[data-action="increment"]');
incrementRef.addEventListener('click', increment);

const decrementRef = document.querySelector('[data-action="decrement"]');
decrementRef.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}
