let secretNumber;
let maxNumber;

function startGame() {
    const maxNumInput = document.getElementById('maxNumInput');
    maxNumber = parseInt(maxNumInput.value);

    if (isNaN(maxNumber) || maxNumber <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById('maxNumDisplay').textContent = maxNumber;
    document.getElementById('message').textContent = 'Guess a number!';
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess <= 0 || guess > maxNumber) {
        alert('Please enter a valid number within the range.');
        return;
    }

    if (guess === secretNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the right number.';
    } else if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }

    guessInput.value = '';
}

function refreshGame() {
    secretNumber = undefined;
    maxNumber = undefined;
    document.getElementById('maxNumInput').value = '';
    document.getElementById('maxNumDisplay').textContent = '10';
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
}
