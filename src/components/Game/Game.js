import GameChoice from "../GameChoice/GameChoice";
import GameMain from '../GameMain/GameMain';
import './Game.css';
import {useState} from "react";

const Game = () => {
    const [choiceSelected, setChoiceSelected] = useState(true);
    const [userChoice, setUserChoice] = useState('x');
    const [computerChoice, setComputerChoice] = useState('o');

    const setChoicesHandler = (userChoice, computerChoice) => {
        setUserChoice(userChoice);
        setComputerChoice(computerChoice);
        setChoiceSelected(true)
    }

    return (
        <div className='game'>
            {!choiceSelected && (
                <GameChoice
                    onChoice={setChoicesHandler}
                />
            )}
            {choiceSelected && (
                <GameMain
                    userChoice={userChoice}
                    computerChoice={computerChoice}
                />
            )}
        </div>
    )
};

export default Game;