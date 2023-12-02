const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll(`h2`);

titles.forEach((element) => {
  console.log(`Category: ${element.innerText}`);
  const nextElement = element.nextElementSibling;
  if (nextElement) {
    const childrenCount = nextElement.children.length;
    console.log(`Number of items in this category: ${childrenCount}`);
  } else {
    console.log("No items found for this category");
  }
});
