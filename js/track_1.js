const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);

const allElementsEl = categoriesEl.querySelectorAll('.item h2 ');
for (let i = 0; i < allElementsEl.length; i += 1) {
  console.log(`Категория: ${allElementsEl[i].textContent}`);
  console.log(
    `Количество элементов: ${categoriesEl.children[i].lastElementChild.children.length}`,
  );
}
