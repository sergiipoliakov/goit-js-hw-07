const formInput = document.querySelector('#validation-input');
console.log(formInput);

const inputLength = formInput.dataset.length;
console.log(inputLength);

formInput.addEventListener('input', onInputChange);
formInput.addEventListener('blur', onInputBlur);

function onInputChange(event) {
  console.log(event.currentTarget.value.length);
}

function onInputBlur(event) {
  console.log('потерял фокис');
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length > inputLength) {
    formInput.classList.add('invalid');
    formInput.classList.remove('valid');
  } else if (event.currentTarget.value.length === 0) {
    formInput.classList.remove('valid');
    formInput.classList.remove('invalid');
  } else if (event.currentTarget.value.length <= inputLength) {
    formInput.classList.add('valid');
    formInput.classList.remove('invalid');
  }
}
