const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const adition = document.createElement("li");
  adition.classList.add("item");
  adition.textContent = element;
  list.append(adition);
});

console.log(ingredients);
