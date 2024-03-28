// Get the body element
const $body = document.querySelector("body");
const $contentDiv = document.querySelector(".content");
const $mediaElements = $contentDiv.querySelectorAll(".media");
const $triggerElements = $contentDiv.querySelectorAll(".content__trg");

let current = $body.dataset.current;

// console.log("Media elements:", $mediaElements);
// console.log("Trigger elements:", $triggerElements);

$mediaElements[current].classList.add("active");
$triggerElements[current].classList.add("active");

const toggleActive = (element) => {
  $triggerElements.forEach(function (el) {
    el.classList.remove("active");
  });

  $mediaElements.forEach(function (el) {
    el.classList.remove("active");
  });

  element.classList.add("active");
  $mediaElements[current].classList.add("active");
  $body.dataset.current = current;
};

// add event listeners to each button
$triggerElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    current = index;
    console.log(current);
    toggleActive(element);
  });
});
