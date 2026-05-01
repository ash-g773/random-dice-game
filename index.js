const guessForm = document.querySelector("#form")
const rightGuess = document.querySelector("#rightGuess")
const wrongGuess = document.querySelector("#wrongGuess")
const outcomeMessage = document.querySelector("#outcomeMessage")
const diceRollImg = document.querySelector("#dice")

guessForm.addEventListener("submit", getGuess)

function getGuess(e) {
    e.preventDefault() // Prevents automatic refresh when event occurs
    console.log(validGuess(e.target[0].value)) // When the form is submitted, take what the user typed and give it to the validGuess function
    e.target[0].value = "" // Clears the input field after submission
}

let countWins = 0
let countLoss = 0

function rollTheDice() {
    // need to be between 1 and 6
    let ans = Math.floor(Math.random() * 7)
    while (ans === 0) {
        ans = Math.floor(Math.random() * 7)
    }
    return ans
}

// check that the input is valid - no letters and between 1 and 6-
function validGuess(guess) {
    if (guess >= 7 || guess <= 0) {
        outcomeMessageError()
        // throw new Error("Invalid input, must be a number between 1 & 6")
    } else if (isNaN(guess)) {
        outcomeMessageError()
    } else {
        return guessMatch(guess)
    }
}

function guessMatch(guess) {
    const randomNumber = rollTheDice()
    if (guess == randomNumber) {
        countWins++
        updateWins()
        outcomeMessagePos(guess)
        changeImg(randomNumber)
        return `${guess} was right, well done!`  // Change to alert ?
    } else {
        countLoss++
        updateLoss()
        outcomeMessageNeg(guess)
        changeImg(randomNumber)
        return `${guess} was wrong - better luck next time!` // Change to alert ?
    }
}

function updateWins() {
    rightGuess.textContent = `Right Guesses: ${countWins}`
}

function updateLoss() {
    wrongGuess.textContent = `Wrong Guesses: ${countLoss}`
}

function outcomeMessagePos(guess) {
    outcomeMessage.textContent = `${guess} Was Right, Well Done!`
}

function outcomeMessageNeg(guess) {
    outcomeMessage.textContent = `${guess} Was Wrong - Better Luck Next Time!`
}

function outcomeMessageError() {
    outcomeMessage.textContent = "Invalid Input, Must be a Number Between 1 & 6"
}

function changeImg(randomNumber) {
    if (randomNumber === 1) {
        diceRollImg.src="./assets/dice1.png"
    }
    else if (randomNumber === 2) {
        diceRollImg.src="./assets/dice2.png"
    }
    else if (randomNumber === 3) {
        diceRollImg.src="./assets/dice3.png"
    }
    else if (randomNumber === 4) {
        diceRollImg.src="./assets/dice4.png"
    }
    else if (randomNumber === 5) {
        diceRollImg.src="./assets/dice5.png"
    }
    else if (randomNumber === 6) {
        diceRollImg.src="./assets/dice6.png"
    }
}

