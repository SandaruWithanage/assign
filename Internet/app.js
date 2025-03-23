let randomNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 3;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);
    let result = document.getElementById('result');
    let inputField = document.getElementById('userGuess');
    let guessButton = document.querySelector('button');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        result.textContent = 'Please enter a valid number between 1 and 10.';
        result.style.color = 'orange';
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        result.textContent = 'Congratulations! You guessed it right!';
        result.style.color = 'green';
        inputField.disabled = true;
        guessButton.disabled = true;
    } else if (attemptsLeft > 0) {
        result.textContent = userGuess > randomNumber ? 
            `Too high! ${attemptsLeft} attempts left.` : 
            `Too low! ${attemptsLeft} attempts left.`;
        result.style.color = 'red';
    } else {
        result.textContent = `Game Over! The correct number was ${randomNumber}.`;
        result.style.color = 'black';
        inputField.disabled = true;
        guessButton.disabled = true;
    }
}
