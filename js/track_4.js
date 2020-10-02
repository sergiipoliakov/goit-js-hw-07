const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const actions = document.querySelectorAll('#counter button');
console.log(actions);

const decrementBtn = actions[0];
console.log(decrementBtn);

const incrementBtn = actions[1];
console.log(incrementBtn);

const valueEl = document.querySelector('#value');
console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
