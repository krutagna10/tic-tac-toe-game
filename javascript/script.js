'use strict';

// Players
let xElement = {
    choice: 'x',
    icon: 'images/icon-x.svg',
    iconBackground: "url('../images/icon-x.svg')",
    iconSilver: 'images/icon-x-silver.svg',
    iconDarkNavy: 'images/icon-x-dark-navy.svg',
    iconDarkNavyBackground: "url('../images/icon-x-dark-navy.svg')",
    iconOutline: 'images/icon-x-outline.svg',
}
let oElement = {
    choice: 'o',
    icon: 'images/icon-o.svg',
    iconBackground: "url('../images/icon-o.svg')",
    iconSilver: 'images/icon-o-silver.svg',
    iconDarkNavy: 'images/icon-o-dark-navy.svg',
    iconDarkNavyBackground: "url('../images/icon-o-dark-navy.svg')",
    iconOutline: 'images/icon-o-outline.svg',
}

// Initial values of user/computer and player1 and player2
let user = oElement;
let computer = xElement;
let player1 = xElement;
let player2 = oElement

let userScore = 0;
let computerScore = 0;
let tieScore = 0;

let player1Score = 0;
let player2Score = 0;

let playerVsPlayer = false;
let playerVsCpu = true;

// Choices
let userChoicesArray = [];
let computerChoicesArray = [];
let player1ChoicesArray = [];
let player2ChoicesArray = [];

let availableChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Elements
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

// Choice Section elements
const newGamePlayerVsCpu = document.querySelector('.choice__game-btn--pvp');
const newGamePlayerVsPlayer = document.querySelector('.choice__game-btn--pvc');
const markButtons = document.querySelectorAll('.choice__mark-btn');
const markIcons = document.querySelectorAll('.choice__mark-icon');

// Game section elements
const gameCard = document.querySelectorAll('.game__card');
const restartButton = document.querySelector('.game__restart-btn');
const xUser = document.querySelector('.game__user--x');
const oUser = document.querySelector('.game__user--o');
const xScoreElement = document.querySelector('.game__score--x');
const oScoreElement = document.querySelector('.game__score--o');
const tiesScoreElement = document.querySelector('.game__score--ties');
const hoverIcons = document.querySelectorAll('.game__card-hover-icon');
const turnIcon = document.querySelector('.game__current-turn-icon');
const gameFinishedSection = document.querySelector('.game-finish-section');
const gameOverlay = document.querySelector('.game__overlay');
const opponentThinkingText = document.querySelector('.game__thinking-text-wrapper');

// Restart Section
const cancelRestartButton = document.querySelector('.restart-game__button--cancel');
const agreeRestartButton = document.querySelector('.restart-game__button-restart');

// Game finish section elements
const gameFinishedText = document.querySelector('.game-finish__text');
const gameResult = document.querySelector('.game-finish__result');
const resultIcon = document.querySelector('.game-finish__result-icon');
const nextRoundButton = document.querySelector('.game__finish-btn--round');
const quitButton = document.querySelector('.game_finish__btn--quit');


// Changing hover icon according to user selection
const changeHoverIcon = (currentPlayer) => {
    if (playerVsCpu) {
        for (const hoverIcon of hoverIcons) {
            hoverIcon.src = user.iconOutline;
        }
    } else {
        for (const hoverIcon of hoverIcons) {
            currentPlayer.choice === player1.choice ? hoverIcon.src = player1.iconOutline : hoverIcon.src = player2.iconOutline;
        }
    }
}

const resetScore = () => {
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
    player1Score = 0;
    player2Score = 0;
    xScoreElement.textContent = 0;
    oScoreElement.textContent = 0;
}

const resetConditions = () => {
    playerVsPlayer = false;
    playerVsCpu = true;
}

// Changing score User
const changeScoreUser = () => {
    if (playerVsCpu) {
        if (user.choice === xElement.choice) {
            xUser.textContent = '(You)';
            oUser.textContent = '(CPU)';
        } else {
            xUser.textContent = '(CPU)';
            oUser.textContent = '(You)';
        }
    }
}

// Updating selection
function updateSelection() {
    markButtons.forEach((markButton, index) => {
        if (currentChoiceIndex === index) {
            markButton.classList.add('choice__mark-btn--active');
            markIcons[index].src = user.iconDarkNavy;
        } else {
            markButton.classList.remove("choice__mark-btn--active");
            markIcons[index].src = computer.iconSilver;
        }
    })
}

// Mark Selection
let currentChoiceIndex = -1;
markButtons.forEach((markSelectionButton, index) => {
    markSelectionButton.addEventListener('click', () => {
        if (markSelectionButton.classList.contains('choice__mark-btn--x')) {
            user = xElement;
            computer = oElement;
            changeHoverIcon('user');
            changeScoreUser();
        } else {
            user = oElement;
            computer = xElement;
            changeHoverIcon('user');
            changeScoreUser()
        }
        currentChoiceIndex = index;
        updateSelection();
    })
})

// When the user clicks on new game button (Player vs CPU)
newGamePlayerVsCpu.addEventListener('click', () => {
    body.classList.add('game-active');
    playerVsCpu = true;
    playerVsPlayer = false;
    if (computer.choice === xElement.choice) {
        showElements();
        setTimeout(getComputerChoice, 1300);
    }
})

newGamePlayerVsPlayer.addEventListener('click', () => {
    playerVsPlayer = true;
    playerVsCpu = false;
    changeHoverIcon(player1);
    xUser.textContent = '(P1)';
    oUser.textContent = '(P2)';
    body.classList.add('game-active');
})

// Displaying choice icon
const displayChoice = (player, index) => {
    if (playerVsCpu) {
        if (player.choice === computer.choice) {
            gameCard[index].style.backgroundImage = computer.iconBackground;
        } else {
            gameCard[index].style.backgroundImage = user.iconBackground;
        }
    } else {
        if (player.choice === player1.choice) {
            gameCard[index].style.backgroundImage = player1.iconBackground;
        } else {
            gameCard[index].style.backgroundImage = player2.iconBackground;
        }
    }
    gameCard[index].disabled = true;
}

// Updating Choices
const updateAvailableChoices = (index) => {
    availableChoices.splice(index, 1);
}

const displayResult = (winner) => {
    gameOverlay.classList.add('hidden');
    gameFinishedSection.classList.remove('draw');
    body.classList.add('game-finished');
    overlay.classList.remove('hidden');
    winner.choice === 'x' ? gameFinishedText.classList.add('x-won') : gameFinishedText.classList.remove('x-won');
    displayScore();

    if (playerVsCpu) {
        if (winner.choice === user.choice) {
            gameResult.textContent = 'You won!';
            resultIcon.src = user.icon;
        } else {
            gameResult.textContent = 'Oh no, you lost!';
            resultIcon.src = computer.icon;
        }
    } else {
        if (winner.choice === player1.choice) {
            gameResult.textContent = 'Player 1 won';
            resultIcon.src = player1.icon;
        } else {
            gameResult.textContent = 'Player 2 won';
            resultIcon.src = player2.icon;

        }
    }
}

const displayWin = (arr, player) => {
    for (const index of arr) {
        gameCard[index].style.backgroundImage = player.iconDarkNavyBackground;
        if (player.choice === xElement.choice) {
            gameCard[index].style.backgroundColor = 'hsl(178, 60%, 48%)';
        } else {
            gameCard[index].style.backgroundColor = 'hsl(39, 88%, 58%)';
        }
    }
}

// Checking for Win
const checkForWin = (arr, player) => {
    for (const element of winConditions) {
        if (element.every(element => arr.includes(element))) {
            displayWin(element, player);
            if (playerVsCpu) {
                player.choice === computer.choice ? computerScore = computerScore + 1 : userScore = userScore + 1;
            } else {
                player.choice === player1.choice ? player1Score = player1Score + 1 : player2Score = player2Score + 1;
            }
            gameOverlay.classList.remove('hidden');
            setTimeout(displayResult, 1300, player);
            return true;
        }
    }
}

// Checking for draw
const checkForDraw = () => {
    if (availableChoices.length === 0) {
        body.classList.add('game-finished');
        gameFinishedSection.classList.add('draw');
        tieScore = tieScore + 1;
        displayScore();
        return true;
    }
}

const displayScore = () => {
    tiesScoreElement.textContent = tieScore;
    if (playerVsCpu) {
        if (user.choice === 'x') {
            xScoreElement.textContent = userScore;
            oScoreElement.textContent = computerScore;
        } else {
            xScoreElement.textContent = computerScore;
            oScoreElement.textContent = userScore;
        }
    } else {
        if (player1.choice === 'x') {
            xScoreElement.textContent = player1Score;
            oScoreElement.textContent = player2Score;
        } else {
            xScoreElement.textContent = player2Score;
            oScoreElement.textContent = player1Score;
        }
    }
}

const showElements = () => {
    gameOverlay.classList.remove('hidden');
    opponentThinkingText.style.display = 'block';
}

// Get computer choice
const getComputerChoice = () => {
    // Turn icon
    turnIcon.src = user.iconSilver;

    // When the computer is making its choice
    opponentThinkingText.style.display = 'none';
    gameOverlay.classList.add('hidden');

    // Generating random number for computer Choice
    let random = availableChoices[Math.floor(Math.random() * (availableChoices.length))];

    // Displaying and updating choice
    displayChoice(computer, random);
    updateAvailableChoices(availableChoices.findIndex(element => element === random));

    // Pushing value to computer choice array
    computerChoicesArray.push(random);

    // Checking conditions
    if (!checkForWin(computerChoicesArray, computer)) {
        checkForDraw(computer);
    }

}

let player1Active = true;
let player2Active = false;

const changeActivePlayer = () => {
    if (player1Active === true) {
        player1Active = false;
        player2Active = true;
    } else {
        player1Active = true;
        player2Active = false;
    }
}

gameCard.forEach((choiceButton, index) => {
    choiceButton.addEventListener('click', () => {
        if (playerVsCpu) {
            // Displaying and updating choice
            displayChoice(user, index);
            updateAvailableChoices(availableChoices.findIndex(element => element === index));

            // Pushing value to user choices array
            userChoicesArray.push(index);

            // Checking conditions
            if (!checkForWin(userChoicesArray, user) && !checkForDraw(user)) {
                showElements();
                setTimeout(getComputerChoice, 1300);
            }

            // Turn icon
            turnIcon.src = computer.iconSilver;
        } else {
            if (player1Active) {
                displayChoice(player1, index);
                updateAvailableChoices(availableChoices.findIndex(element => element === index));
                player1ChoicesArray.push(index);

                if (!checkForWin(player1ChoicesArray, player1)) {
                    checkForDraw();
                }

                // Change Active Player
                changeActivePlayer();

                setTimeout(changeHoverIcon, 200, player2);

                // Turn Icon
                turnIcon.src = player2.iconSilver;
            } else {
                displayChoice(player2, index);
                updateAvailableChoices(availableChoices.findIndex(element => element === index));
                player2ChoicesArray.push(index);

                if (!checkForWin(player2ChoicesArray, player2)) {
                    checkForDraw();
                }

                // Change Active Player
                changeActivePlayer();

                setTimeout(changeHoverIcon, 200, player1);

                // Turn Icon
                turnIcon.src = player1.iconSilver;
            }
        }
    })
});

const resetScreen = () => {
    for (const choiceButton of gameCard) {
        choiceButton.style.backgroundImage = '';
        choiceButton.style.backgroundColor = 'hsl(199, 35%, 19%)';
        userChoicesArray = [];
        computerChoicesArray = [];
        player1ChoicesArray = [];
        player2ChoicesArray = [];
        availableChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        choiceButton.disabled = false;
    }
}


const changeUser = () => {
    if (playerVsCpu) {
        if (user.choice === xElement.choice) {
            user = oElement;
            computer = xElement;
            showElements();
            setTimeout(getComputerChoice, 1300);
        } else {
            user = xElement;
            computer = oElement;
        }
        changeHoverIcon();
        displayScore();
        changeScoreUser();
    }
}

// Next Round Button
nextRoundButton.addEventListener('click', () => {
    body.classList.remove('game-finished');
    overlay.classList.add('hidden');
    resetScreen();
    changeUser();
})

// Restart Button
restartButton.addEventListener('click', () => {
    body.classList.add('restart-prompt');
    overlay.classList.remove('hidden');
    cancelRestartButton.addEventListener('click', () => {
        body.classList.remove('restart-prompt');
        overlay.classList.add('hidden');
    })

    agreeRestartButton.addEventListener('click', () => {
        resetScreen();
        resetScore();
        body.classList.remove('restart-prompt');
        overlay.classList.add('hidden');
    })
});

const resetEverything = () => {
    body.classList.remove('game-active');
    body.classList.remove('game-finished');
    overlay.classList.add('hidden');
    resetScreen();
    resetScore();
    resetConditions();
}

// Quit Button
quitButton.addEventListener('click', resetEverything);

for (const logoLink of logoLinks) {
    logoLink.addEventListener('click', resetEverything);
}








