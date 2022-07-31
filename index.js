let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
var sum = 0
var cards = []
var firstNum = 0
var secondNum = 0
let isAlive = false
sum = firstNum + secondNum


var person = {
    name : "Joel",
    chips: "$150"
}

playerEl.innerText = person.name + " : " + person.chips





 function rand(){
    let bandNum =  Math.floor(Math.random() * 13) + 1
    if (bandNum > 10){
        return 10
    }else if (bandNum ===1){
        return 11
    }else {
        return bandNum
    }
}

function start(){
    firstNum =  rand()
    secondNum =  rand()
    sum = firstNum + secondNum
   // playerEl.innerText = firstNum
    isAlive = true
    cards = [firstNum, secondNum]
    render()
}


 function render() {
    cardEl.innerText= "Cards:  "  + cards
    if(sum=== 21){
        messageEl.innerText = "You have Blackjack"
        isAlive = false
      }else if (sum < 21){
        messageEl.innerText= "Do you want another card?"
      }else {
        messageEl.innerText= "You are out"
        isAlive = false
    }    
    sumEl.innerText= "Sum: " + sum
}
function newCard(){
    if(isAlive ==true){
    let newC = Math.floor(Math.random() * 13) + 1
    cards.push(" " + newC)
    sum += newC
    render()
}
}


 


