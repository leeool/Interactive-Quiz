const button = document.querySelectorAll(".button")
const correctAnswers = ["A", "C", "A", "B"]
const questions = document.querySelectorAll(".questions")
const cards = document.querySelectorAll(".card-content")

let score = 0

console.log()
let cardCounter = 0
questions.forEach((question) => {
  question.addEventListener("click", event => {
    const correctAnswer = document.querySelector(".correta")

    if(event.target !== correctAnswer && event.target.nodeName !== "UL"){
      event.target.classList.add("incorrect-answer")
      event.target.classList.remove("select")
      correctAnswer.classList.add("correct-answer")
      } 
      else if(event.target.nodeName !== "UL"){
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









// card1.addEventListener("click", event => {
//   const valueQuestion = event.srcElement.attributes.value.textContent
//   console.log(valueQuestion)
//   const correctAnswer = document.querySelector("corret")
  
//   if(valueQuestion !== "A"){

//     return
//   }

//   console.log("acertou")
// })
