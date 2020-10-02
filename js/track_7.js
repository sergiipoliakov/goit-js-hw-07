const slider = document.querySelector('#font-size-control');
console.log(slider);

const textEl = document.querySelector('#text');
console.log(textEl);

slider.addEventListener('input', onSlider);

function onSlider(event) {
  const sizeText = event.currentTarget.value;

  textEl.style.fontSize = sizeText + 'px';
}
