const buttons = document.querySelectorAll(".button")
const cards = document.querySelectorAll(".card-content")

let score = 0

let cardCounter = 0
buttons.forEach((button) => {
  button.addEventListener("click", event => {
    const correctAnswer = document.querySelector(".correta")

    if(event.target !== correctAnswer){
      event.target.classList.add("incorrect-answer")
      event.target.classList.remove("select")
      correctAnswer.classList.add("correct-answer")
    } 
    else{
      correctAnswer.classList.add("correct-answer")
      correctAnswer.classList.remove("select")
    }
    cardCounter += 1
    
    cards[cardCounter].classList.remove("d-none")

    setTimeout(() => {
      scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
      })
    }, 1000);

  })
})
