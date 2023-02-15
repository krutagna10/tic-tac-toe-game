import BoardHeader from "../GameBoard/BoardHeader";
import BoardBody from "../GameBoard/BoardBody";
import GameResult from "../GameResult/GameResult";
import {useRef, useState} from "react";
import './Game.css';
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";

const icons = {
    x: xIcon,
    o: oIcon,
}

// Choices Array which contains all the choices
let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// User Array which contains user choices
let userArray = [];

// Computer Array which contains computer choices
let computerArray = [];

// Win Conditions Array
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const Game = (props) => {
    // Game Finished state for displaying or hiding the result
    const [gameFinished, setGameFinished] = useState(false);

    // Result state for passing result text to GameResult.js
    const [result, setResult] = useState('');

    // Assigning Game Button to useRef
    const gameBtnOne = useRef(null);
    const gameBtnTwo = useRef(null);
    const gameBtnThree = useRef(null);
    const gameBtnFour = useRef(null);
    const gameBtnFive = useRef(null);
    const gameBtnSix = useRef(null);
    const gameBtnSeven = useRef(null);
    const gameBtnEight = useRef(null);
    const gameBtnNine = useRef(null);

    // Creating an array that stores gameButtons
    const gameButtons = [gameBtnOne, gameBtnTwo, gameBtnThree, gameBtnFour, gameBtnFive, gameBtnSix, gameBtnSeven, gameBtnEight, gameBtnNine];

    // Function that checks for win
    const checkForWin = (arr, player) => {
        for (const condition of winConditions) {
            if (condition.every(element => arr.includes(element))) {
                // Setting the result to win or lose
                player === 'user' ? setResult('win') : setResult('lose');

                // Setting Game Finished to true
                setGameFinished(true)

                // Returning true is user or computer has won the round
                return true;
            }
        }
        // Returning false when no won has won the round
        return false;
    }

    // Function that checks for draw
    const checkForDraw = () => {
        if (choices.length === 0) {
            // Setting result to draw
            setResult('draw');

            // Setting game finished to true
            setGameFinished(true);

            return true;
        }
    }

    // Function that sets background image, disables the buttons and splices the array
    const playerHandler = (player, value) => {
        // Pushing values to the array
        player.name === 'user' ? userArray.push(value) : computerArray.push(value);

        // Changing background of button
        gameButtons[value].current.style.backgroundImage = `url(${icons[player.choice]})`;

        // Disabling the button so that user cannot click again
        gameButtons[value].current.disabled = true;

        // Removing the value from choices
        const index = choices.indexOf(value);
        choices.splice(index, 1);
    }


    // Function to get computer choice
    const getComputerChoice = () => {
        // Generating a random value
        const random = choices[Math.floor(Math.random() * choices.length)];

        // Calling the player handler function with computer
        playerHandler(props.computer, random);

        // Checking for win
        checkForWin(computerArray, 'computer');

        // Checking for draw
        checkForDraw();
    }

    // Function when user clicks on game Button
    const getUserChoice = (value) => {
        // Calling the player handler function with user
        playerHandler(props.user, value);

        // Check for win and checking for draw, and if they are both false the calling the getComputerChoice() function
        if (!checkForWin(userArray, 'user') && !checkForDraw()) {
            getComputerChoice();
        }
    };

    const resetHandler = () => {
        // Resetting choices array
        choices = [0, 1, 2, 3, 4, 5, 6, 7, 8]

        // Resetting user array
        userArray = [];

        // Resetting computer array
        computerArray = [];

        // Remove backgroundImage of gameButtons and enabling them
        gameButtons.forEach(gameButton => {
            gameButton.current.disabled = false;
            gameButton.current.style.backgroundImage = 'none';
        });
    }

    const nextRoundHandler = () => {
        // Resetting the data
        resetHandler();

        // Setting game finished to false
        setGameFinished(false);
    };


    return (
        <div className='game'>
            <div className='game__board flow'>
                <BoardHeader/>
                <BoardBody
                    gameButtons={gameButtons}
                    onUserChoice={getUserChoice}
                />
            </div>

            {gameFinished && (
                <GameResult
                    result={result}
                    user={props.user}
                    computer={props.computer}
                    onNextRound={nextRoundHandler}
                    onQuit={props.quitHandler}
                />
            )}
        </div>
    )
};

export default Game;