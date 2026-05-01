const guessForm = document.querySelector("#form")
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
        alert("Invalid input, must be a number between 1 & 6")
        // throw new Error("Invalid input, must be a number between 1 & 6")
    } else if (isNaN(guess)) {
        alert("Invalid input, must be a number between 1 & 6")
    } else {
        return guessMatch(guess)
    }
}

function guessMatch(guess) {
    const randomNumber = rollTheDice()
    if (guess == randomNumber) {
        countWins++
        return `${guess} was right, well done!`
    } else {
        countLoss++
        return `${guess} was wrong - better luck next time!`
    }
}