const validaionInputRef = document.querySelector('#validation-input');

const length = +validaionInputRef.getAttribute('data-length');

validaionInputRef.addEventListener('change', event => {
  if (event.target.value.length === length) {
    if (event.target.classList.contains('invalid')) {
      event.target.classList.remove('invalid');
    }
    event.target.classList.add('valid');
  } else {
    if (event.target.classList.contains('valid')) {
      event.target.classList.remove('valid');
    }
    event.target.classList.add('invalid');
  }
});
