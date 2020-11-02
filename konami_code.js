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

function init() {
  let index = 0
  document.body.addEventListener("keydown", (e) => {
    const keyName = e.key
    console.log(keyName)
    if (keyName === codes[index]) {
      index++
      if (index === codes.length) {
        alert("You have done it!!!")
        
      } else {
        index = 0
      }
    }
  })
}
