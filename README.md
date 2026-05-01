# Random Dice Game - Hackathon Project!

Welcome to our Random Dice Game application! 

1. Enter a number between 1 & 6
2. Click "Roll Dice!
3. Get message about correct or incorrect guess
4. Guess Counter updates accordingly
5. Dice matches computer generated number


## Installation, Usage & technologies
[Check out our game here!](https://random-dice-game-dale.netlify.app/)

## How we made the game
- Begun by working on the HTML, design the content we wanted our webpage to show. We added :
  - a title
  - the rules
  - a form to input number
  - a submit button
  - a guess count (for correct and incorrect guesses and the dice image)
  - image for initial mystery dice number
- We created the Javascript creating various function such as:
  -  `getGuess()` prevents refresh, feeds the input into `validGuess()` and clears the input bar
  - `rollTheDice()` generates a number between 1 and 6, and does it again if it generates 0
  - `guessMatch()` checks whether the computer generated number matches the guess inputted into the form.
  - `validGuess()` confirms the number put into the dice is between 1 and 6
  - `updateWins()` and `updateLoss` adds to the Guess Counter section
  - `outcomeMessagePos()` and `outcomeMessageNeg()` let you know the result (whether guess matches dice number).
  - `outcomeMessageError()` displays a message when you don't input a number between 1 and 6.
  - `changeImg()` changes the image to match the random number generated e.g. if the computer generates a random number 1, then match the image that shows the dice with 1 circle on it.
- Finally with the CSS we changes the background and aligned everything in the center.


## Screenshots/Images
We used the images of dice in assets. They each show a different number from 1 to 6. Then we have the standard initial dice that has '?' on it.

## Wins & Challenges
Wins:
- We worked in the pair programming method and it worked very well. Because it's a relatively small project, we got things done quickly, no need for excessive branching and cloning over the small things. 
- We switched the driver for each phase e.g. one for HTML, one for JS and one for CSS
Losses: 
- CSS was difficult as a group. We knew what we kind of wanted but it looked rubbish we tried to implement it.