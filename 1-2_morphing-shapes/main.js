const $body = document.querySelector("body");
const $contentDiv = document.querySelector(".contenedor");
let $newElements = []; // create array to store multiple elements

let current = 0;

for (let i = 0; i < 24; i++) {
  let $newElement = document.createElement("div"); // create a new element each iteration
  $newElement.classList.add("elemento");
  $contentDiv.appendChild($newElement);
  $newElements.push($newElement); // store the new element in the array
}

console.log($newElements);

$newElements[current].classList.add("active"); // access the first element in the array

const toggleActive = (element) => {
  $newElements.forEach(function (el) {
    // iterate over the array of elements
    el.classList.remove("active");
  });

  element.classList.add("active");
  $body.dataset.current = current.toString(); // Ensure current is a string to match dataset expectations
};

$newElements.forEach((element, index) => {
  // iterate over the array of elements
  element.addEventListener("click", () => {
    current = index;
    toggleActive(element);
  });
});
