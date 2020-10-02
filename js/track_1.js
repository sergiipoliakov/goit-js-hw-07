const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);

const allElementsEl = categoriesEl.querySelectorAll('.item h2 ');
for (let i = 0; i < allElementsEl.length; i += 1) {
  console.log(`Категория: ${allElementsEl[i].textContent}`);
  console.log(
    `Количество элементов: ${categoriesEl.children[i].lastElementChild.children.length}`,
  );
}
// const itemRef = document.querySelectorAll('li.item');
// console.log(itemRef);
// const countCategories = array => array.length;
// console.log(`В списке ${countCategories(itemRef)} категории`);
// const categoryInfo = array =>
//   array.forEach(item => {
//     const subItemRefTitle = item.querySelector('h2');
//     const subItemRefTitleContent = subItemRefTitle.textContent;
//     console.log(`Категория: ${subItemRefTitleContent}`);
//     const subItemList = item.querySelectorAll('li');
//     const countSubItemList = countCategories(subItemList);
//     console.log(`Количество элементов: ${countSubItemList}`);
//   });
// // const countCategoryItems = ()
// console.log(categoryInfo(itemRef));

// const itemRef = document.querySelectorAll('li.item');
// console.log(itemRef);
// const countCategories = array => array.length;
// console.log(`В списке ${countCategories(itemRef)} категории`);
// const categoryInfo = array =>
//   array.forEach(item => {
//     const subItemRefTitle = item.querySelector('h2');
//     const subItemRefTitleContent = subItemRefTitle.textContent;
//     console.log(`Категория: ${subItemRefTitleContent}`);
//     const subItemList = item.querySelectorAll('li');
//     const countSubItemList = countCategories(subItemList);
//     console.log(`Количество элементов: ${countSubItemList}`);
//   });
// const result = categoryInfo(itemRef);
