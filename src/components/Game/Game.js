import GameBoardHeader from "../GameBoard/GameBoardHeader";
import GameResult from "../GameResult/GameResult";
import {useRef, useState} from "react";
import './Game.css';
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";

const icons = {
    x: xIcon,
    o: oIcon,
}

let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let userArray = [];

let computerArray = [];

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
    const [gameFinished, setGameFinished] = useState(false);
    const [result, setResult] = useState('');
    const [winner, setWinner] = useState({});

    const gameBtnOne = useRef(null);
    const gameBtnTwo = useRef(null);
    const gameBtnThree = useRef(null);
    const gameBtnFour = useRef(null);
    const gameBtnFive = useRef(null);
    const gameBtnSix = useRef(null);
    const gameBtnSeven = useRef(null);
    const gameBtnEight = useRef(null);
    const gameBtnNine = useRef(null);
    const gameButtons = [gameBtnOne, gameBtnTwo, gameBtnThree, gameBtnFour, gameBtnFive, gameBtnSix, gameBtnSeven, gameBtnEight, gameBtnNine];

    // Function that checks for win
    const checkForWin = (arr, player) => {
        for (const condition of winConditions) {
            if (condition.every(element => arr.includes(element))) {
                // Setting the result to win or lose
                player === 'user' ? setResult('win') : setResult('lose');

                return true;
            }
        }
        return false;
    }

    // Function that checks for draw
    const checkForDraw = () => {
        if (choices.length === 0) {
            setResult('draw');
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
        let random = choices[Math.floor(Math.random() * choices.length)];
        playerHandler(props.computer, random);
        checkForWin(computerArray, 'computer');
        checkForDraw();
    }

    // Function when user clicks on game Button
    const clickHandler = (event) => {
        const value = Number(event.target.dataset.value)
        playerHandler(props.user, value);
        if (!checkForWin(userArray, 'user') && !checkForDraw()) {
            getComputerChoice();
        }
    };


    return (
        <div className='game'>

            {!gameFinished && (
                <div className='game__board flow'>
                    <GameBoardHeader></GameBoardHeader>
                    <div className='game__board-body grid grid--3-columns grid--gap'>
                        {gameButtons.map((element, index) => (
                            <button
                                key={index}
                                className='game__btn'
                                data-value={index}
                                onClick={clickHandler}
                                ref={element}
                            />
                        ))}
                    </div>
                </div>
            )}

            {gameFinished && (
                <GameResult
                    result={result}
                    user={props.user}
                />
            )}
        </div>
    )
};

export default Game;