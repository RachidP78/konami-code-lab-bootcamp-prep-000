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
  document.body.addEventListener("keydown", (event) => {
    let index = 0
    function onKeyDownHandler(event) {
      const keyName = event.key

      if (key === codes[index]) {
        index++

        if (index === alphabet.length) {
          alert("You have done it!!!")

          index = 0
        }
      } else {
        index = 0
      }
    }
  }
}

// KeyboardEvent.key
// KeyboardEvent()
