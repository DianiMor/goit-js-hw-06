let counterValue = 0;

const elementCount = document.getElementById("value");
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

function incrementButton() {
  counterValue += 1;
  elementCount.textContent = counterValue;
}

function decrementButton() {
  counterValue -= 1;
  elementCount.textContent = counterValue;
}

increment.addEventListener("click", incrementButton);
decrement.addEventListener("click", decrementButton);
