const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

function init() {
  document.body.addEventListener("keydown", e => {
    if (codes[index === e.key) {
      index++
      if (index === codes.length) {
        alert("You have done it!!!")
        index = 0
      } else {
        index = 0
      }
    }
  })
}
