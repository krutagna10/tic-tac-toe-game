import GameMainHeader from "./GameMainHeader";
import './GameMain.css';
import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import {useRef} from "react";

const icons = {
    x: xIcon,
    o: oIcon,
}

let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const userChoicesArray = [];

const computerChoicesArray = [];

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

const GameMain = (props) => {
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
    const checkForWin = (arr) => {
        for (const condition of winConditions) {
            if (condition.every(element => arr.includes(element))) {
                return true;
            }
        }
        return false;
    }

    // Function that checks for draw
    const checkForDraw = () => {
        return choices.length === 0;
    }

    // Function that sets background image, disables the buttons and splices the array
    const playerHandler = (player, value) => {
        gameButtons[value].current.style.backgroundImage = `url(${icons[player.choice]})`;
        gameButtons[value].current.disabled = true;

        const index = choices.indexOf(value);
        choices.splice(index, 1);
    }


    // Function to get computer choice
    const getComputerChoice = () => {
        let random = choices[Math.floor(Math.random() * choices.length)];
        computerChoicesArray.push(random);

        playerHandler(props.computer, random);

        if (checkForWin(computerChoicesArray)) {
            props.onResult('lose');
        }
        if (checkForDraw()) {
            props.onResult('draw');
        }
    }

    // Function when user clicks on game Button
    const clickHandler = (event) => {
        const value = Number(event.target.dataset.value)
        userChoicesArray.push(value);

        playerHandler(props.user, value);

        if (checkForWin(userChoicesArray)) {
            props.onResult('win');
        } else if (checkForDraw()) {
            props.onResult('draw');
        } else {
            getComputerChoice();
        }
    }

    return (
        <div className='game flow'>
            <GameMainHeader/>
            <div className='game__board grid grid--3-columns grid--gap'>
                {gameButtons.map((element, index) => (
                    <button
                        className='game__btn'
                        key={index}
                        data-value={index.toString()}
                        onClick={clickHandler}
                        ref={element}
                    />
                ))}
            </div>
        </div>
    )
};

export default GameMain;

