import BoardHeader from "../Board/BoardHeader/BoardHeader";
import BoardBody from "../Board/BoardBody/BoardBody";
import BoardFooter from "../Board/BoardFooter/BoardFooter";
import Result from "../Result/Result";
import {useState} from "react";
import Restart from "../Restart/Restart";
import './Game.css';

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
    };

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
    };


    const handleComputerChoice = () => {
        // Generating a random value
        const random = choices[Math.floor(Math.random() * choices.length)];

        // Removing the value from choices;
        choices.splice(choices.indexOf(random), 1);

        const newChoices = [...computerArray, random]

        // Setting the new array
        setComputerArray([...newChoices]);

        // Checking for win and draw
        checkForWin([...newChoices], props.computer);
        checkForDraw();
    };


    // Function when user clicks on game Button
    const handleUserChoice = (value) => {
        // Removing the value from choices;
        choices.splice(choices.indexOf(value), 1);

        // Setting the new state of userArray
        setUserArray([...userArray, value]);

        // Check for win and checking for draw, and if they are both false the calling the getComputerChoice() function
        if (!checkForWin([...userArray, value], props.user) && !checkForDraw()) {
            handleComputerChoice();
        }
    };

    const handleReset = () => {
        // Resetting choices array
        choices = [0, 1, 2, 3, 4, 5, 6, 7, 8]

        // Resetting user array
        setUserArray([]);

        // Resetting computer array
        setComputerArray([]);

    };

    // Handler when user clicks on next round button
    const handleNextRound = () => {
        // Resetting the data
        handleReset();

        // Swapping Choices
        props.swapChoices();

        // Hiding the overlay
        props.hideOverlay();

        // Setting game finished to false
        setGameFinished(false);
    };

    const handleQuit = () => {
        // Resetting the data
        handleReset();

        // Calling App.js handleQuit
        props.onQuit();
    };

    const handleShowRestart = () => {
        props.showOverlay();
        setGameRestart(true);
    };

    const handleHideRestart = () => {
        props.hideOverlay();
        setGameRestart(false);
    };

    const handleRestart = () => {
        handleReset();
        setScores({user: 0, computer: 0, draw: 0});
        handleHideRestart();
        setGameRestart(false);
    };


    return (
        <div className='game'>
            <div className='game__board flow'>
                <BoardHeader onRestart={handleShowRestart}/>
                <BoardBody
                    user={props.user}
                    computer={props.computer}
                    userArray={userArray}
                    computerArray={computerArray}
                    onUserChoice={handleUserChoice}
                />
                <BoardFooter scores={scores} user={props.user}/>
            </div>

            {gameFinished && (
                <Result
                    result={result}
                    winner={winner}
                    onNextRound={handleNextRound}
                    onQuit={handleQuit}
                />
            )}

            {gameRestart && (
                <Restart
                    onCancel={handleHideRestart}
                    onRestart={handleRestart}
                />
            )}
        </div>
    )
};

export default Game;