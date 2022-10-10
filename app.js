const button = document.querySelectorAll(".button")
const correctAnswers = ["A", "C", "A", "B"]
const questions = document.querySelectorAll(".questions")
const cards = document.querySelectorAll(".card-content")

let score = 0

// console.log(questions)

questions.forEach((question, index) => {
  question.addEventListener("click", event => {
    const correctAnswer = document.querySelector(".correta")
    const incorretAnswer = document.querySelectorAll(".incorreta")
  
    if(event.target !== correctAnswer){
      incorretAnswer.forEach(element => {
        element.classList.add("incorrect-answer")
        element.classList.remove("select")
        correctAnswer.classList.add("correct-answer")
        return
      }) 
    }
    correctAnswer.classList.add("correct-answer")
    correctAnswer.classList.remove("select")
    let cardCounter = 0
    cardCounter += 1

    cards[cardCounter].classList.remove("d-none")

    // cards.forEach((card) => {
    //   card.classList.remove("d-none")
    // })

  })
})









// card1.addEventListener("click", event => {
//   const valueQuestion = event.srcElement.attributes.value.textContent
//   console.log(valueQuestion)
//   const correctAnswer = document.querySelector("corret")
  
//   if(valueQuestion !== "A"){

//     return
//   }

//   console.log("acertou")
// })
