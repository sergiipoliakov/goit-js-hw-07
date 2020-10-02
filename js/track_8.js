const inputNumberEl = document.querySelector('#controls > input');

const action = document.querySelectorAll('#controls button');

const renderBtn = action[0];

const destroyBtn = action[1];

const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.style = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;

    boxesEl.appendChild(boxEl);
  }
}

function getValue() {
  const value = inputNumberEl.value;
  console.log(value);

  createBoxes(value);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}

renderBtn.addEventListener('click', getValue);
destroyBtn.addEventListener('click', destroyBoxes);
