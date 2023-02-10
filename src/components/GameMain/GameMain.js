import GameMainHeader from "./GameMainHeader";
import GameButton from "./GameButton";
import './GameMain.css';
import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import {useRef} from "react";

const icons = {
    x: xIcon,
    o: oIcon,
}

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

    const choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    const getComputerChoice = () => {
        let random = Math.floor(Math.random() * choices.length);
        gameButtons[random].current.style.backgroundImage = `url(${icons[props.computerChoice]})`;
        gameButtons[random].current.disabled = true;

        const index = choices.findIndex(element => element === random);
        choices.splice(index, 1);
        console.log('Random : ', random);
        console.log('Choices : ', choices)
    }

    const clickHandler = (event) => {
        const value = Number(event.target.dataset.value)
        gameButtons[value].current.style.backgroundImage = `url(${icons[props.userChoice]})`;
        gameButtons[value].current.disabled = true;

        // Removing value from choices
        const index = choices.findIndex(element => element === value);
        choices.splice(index, 1);
        getComputerChoice();
        console.log('Value : ', value)
    }


    return (
        <div className='game flow'>
            <GameMainHeader/>
            <div className='game__board grid grid--3-columns grid--gap'>
                <button className='game__btn' data-value='0' onClick={clickHandler} ref={gameBtnOne}></button>
                <button className='game__btn' data-value='1' onClick={clickHandler} ref={gameBtnTwo}></button>
                <button className='game__btn' data-value='2' onClick={clickHandler} ref={gameBtnThree}></button>
                <button className='game__btn' data-value='3' onClick={clickHandler} ref={gameBtnFour}></button>
                <button className='game__btn' data-value='4' onClick={clickHandler} ref={gameBtnFive}></button>
                <button className='game__btn' data-value='5' onClick={clickHandler} ref={gameBtnSix}></button>
                <button className='game__btn' data-value='6' onClick={clickHandler} ref={gameBtnSeven}></button>
                <button className='game__btn' data-value='7' onClick={clickHandler} ref={gameBtnEight}></button>
                <button className='game__btn' data-value='8' onClick={clickHandler} ref={gameBtnNine}></button>
            </div>
        </div>
    )
};

export default GameMain;

