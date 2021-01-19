const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const itemsRef = document.querySelectorAll('.item');
for (const item of itemsRef) {
  console.log(`Категория ${item.firstElementChild.textContent}`);
  console.log(
    `Количество элементов ${item.firstElementChild.nextElementSibling.children.length}`,
  );
}
