import BoardHeader from "../GameBoard/BoardHeader";
import BoardBody from "../GameBoard/BoardBody";
import BoardFooter from "../GameBoard/BoardFooter";
import GameResult from "../GameResult/GameResult";
import {useRef, useState} from "react";
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";
import './Game.css';

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

const Game = (props) => {
    const [gameFinished, setGameFinished] = useState(false);
    const [result, setResult] = useState('');
    const [winner, setWinner] = useState('');
    const [scores, setScores] = useState({user: 0, computer: 0, draw: 0});

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

    const checkForWin = (arr, player) => {
        for (const condition of props.winConditions) {
            if (condition.every(element => arr.includes(element))) {
                if (player.name === 'user') {
                    // When the winner is user
                    setResult('win');
                    setWinner({...props.user});
                    setScores(prevState => ({...prevState, user: scores.user + 1}))
                } else {
                    // When the winner is computer
                    setResult('lose');
                    setWinner({...props.computer});
                    setScores(prevState => ({...prevState, computer: scores.computer + 1}));
                }

                // Setting Game Finished to true
                setGameFinished(true)

                // Returning true if user or computer has won the round
                return true;
            }
        }
        // Returning false when no won has won the round
        return false;
    }

    const checkForDraw = () => {
        if (choices.length === 0) {
            // Setting the winner to draw
            setWinner({name: 'none', choice: 'draw'});

            // Setting result to draw
            setResult('draw');

            // Incrementing draw score
            setScores(prevState => ({...prevState, draw: prevState.draw + 1}));

            // Setting game finished to true
            setGameFinished(true);

            // Returning true is there is a draw
            return true;
        }
    }

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


    const getComputerChoice = () => {
        // Generating a random value
        const random = choices[Math.floor(Math.random() * choices.length)];

        // Calling the player handler function with computer
        playerHandler(props.computer, random);

        // Checking for win and draw
        checkForWin(computerArray, props.computer);
        checkForDraw();
    }

    // Function when user clicks on game Button
    const getUserChoice = (value) => {
        // Calling the player handler function with user
        playerHandler(props.user, value);

        // Check for win and checking for draw, and if they are both false the calling the getComputerChoice() function
        if (!checkForWin(userArray, props.user) && !checkForDraw()) {
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

    // Handler when user clicks on next round button
    const nextRoundHandler = () => {
        // Resetting the data
        resetHandler();

        // Swapping Choices
        props.swapChoices();

        // Setting game finished to false
        setGameFinished(false);
    };

    const quitHandler = () => {
        // Resetting the data
        resetHandler();

        // Calling App.js quitHandler
        props.onQuit();
    }


    return (
        <div className='game'>
            <div className='game__board flow'>
                <BoardHeader/>
                <BoardBody
                    gameButtons={gameButtons}
                    onUserChoice={getUserChoice}
                />
                <BoardFooter
                    scores={scores}
                    user={props.user}
                />
            </div>

            {gameFinished && (
                <GameResult
                    result={result}
                    winner={winner}
                    onNextRound={nextRoundHandler}
                    onQuit={quitHandler}
                />
            )}
        </div>
    )
};

export default Game;