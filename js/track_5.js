const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length > 0) {
    refs.nameLabel.textContent = event.currentTarget.value;
  } else {
    refs.nameLabel.textContent = 'незнакомец';
    // console.log(event.currentTarget.value.length);
    // console.log((refs.nameLabel.textContent = 'незнакомец'));
  }
}
console.log(refs.input.value.length);
