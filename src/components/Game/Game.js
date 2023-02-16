import BoardHeader from "../GameBoard/BoardHeader";
import BoardBody from "../GameBoard/BoardBody";
import BoardFooter from "../GameBoard/BoardFooter";
import GameResult from "../GameResult/GameResult";
import {useState} from "react";
import './Game.css';
import GameRestart from "../GameRestart/GameRestart";

// Win Condition Array
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

// Choices Array which contains all the choices
let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Game = (props) => {
    const [gameFinished, setGameFinished] = useState(false);
    const [gameRestart, setGameRestart] = useState(false);
    const [result, setResult] = useState('');
    const [winner, setWinner] = useState('');
    const [scores, setScores] = useState({user: 0, computer: 0, draw: 0});

    const [userArray, setUserArray] = useState([]);
    const [computerArray, setComputerArray] = useState([]);


    const checkForWin = (arr, player) => {
        for (const condition of winConditions) {
            if (condition.every(element => arr.includes(element))) {
                // Setting the result
                player.name === 'user' ? setResult('win') : setResult('lose');

                // Setting the winner
                player.name === 'user' ? setWinner({...props.user}) : setWinner({...props.computer});

                // Setting the scores
                player.name === 'user' ?
                    setScores(prevState => ({...prevState, user: scores.user + 1})) :
                    setScores(prevState => ({...prevState, computer: scores.computer + 1}));

                // Setting Game Finished to true
                setGameFinished(true)

                // Showing overlay
                props.showOverlay();

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

            // Showing overlay
            props.showOverlay();

            // Returning true is there is a draw
            return true;
        }
    }

    const playerHandler = (player, value) => {
        // Removing the value from choices
        const index = choices.indexOf(value);
        choices.splice(index, 1);
    }


    const getComputerChoice = () => {
        // Generating a random value
        const random = choices[Math.floor(Math.random() * choices.length)];

        // Calling the player handler function with computer
        playerHandler(props.computer, random);

        // Setting the new state of computerArray
        setComputerArray([...computerArray, random]);

        // Checking for win and draw
        setTimeout(() => {
            checkForWin([...computerArray, random], props.computer);
            checkForDraw();
        }, 0);
    }

    // Function when user clicks on game Button
    const getUserChoice = (value) => {
        // Calling the player handler function with user
        playerHandler(props.user, value);

        // Setting the new state of userArray
        setUserArray([...userArray, value]);

        // Check for win and checking for draw, and if they are both false the calling the getComputerChoice() function
        setTimeout(() => {
            if (!checkForWin([...userArray, value], props.user) && !checkForDraw()) {
                getComputerChoice();
            }
        }, 0);
    };

    const resetHandler = () => {
        // Resetting choices array
        choices = [0, 1, 2, 3, 4, 5, 6, 7, 8]

        // Resetting user array
        setUserArray([]);

        // Resetting computer array
        setComputerArray([]);

    }

    // Handler when user clicks on next round button
    const nextRoundHandler = () => {
        // Resetting the data
        resetHandler();

        // Swapping Choices
        props.swapChoices();

        // Hiding the overlay
        props.hideOverlay();

        // Setting game finished to false
        setGameFinished(false);
    };

    const quitHandler = () => {
        // Resetting the data
        resetHandler();

        // Calling App.js quitHandler
        props.onQuit();
    };

    const showRestartHandler = () => {
        props.showOverlay();
        setGameRestart(true);
    };

    const hideRestartHandler = () => {
        props.hideOverlay();
        setGameRestart(false);
    };

    const restartHandler = () => {
        resetHandler();
        setScores({user: 0, computer: 0, draw: 0});
        hideRestartHandler();
        setGameRestart(false);
    };


    return (
        <div className='game'>
            <div className='game__board flow'>
                <BoardHeader onRestart={showRestartHandler}/>
                <BoardBody
                    user={props.user}
                    userArray={userArray}
                    computerArray={computerArray}
                    onUserChoice={getUserChoice}
                />
                <BoardFooter scores={scores} user={props.user}/>
            </div>

            {gameFinished && (
                <GameResult
                    result={result}
                    winner={winner}
                    onNextRound={nextRoundHandler}
                    onQuit={quitHandler}
                />
            )}

            {gameRestart && (
                <GameRestart
                    onCancel={hideRestartHandler}
                    onRestart={restartHandler}
                />
            )}
        </div>
    )
};

export default Game;