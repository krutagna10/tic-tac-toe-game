import GameChoice from "../GameChoice/GameChoice";
import GameMain from '../GameMain/GameMain';
import GameResult from '../GameResult/GameResult';
import './Game.css';
import {useState} from "react";

const Game = () => {
    const [choiceSelected, setChoiceSelected] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);

    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');

    const setChoicesHandler = (userChoice, computerChoice) => {
        setUserChoice(userChoice);
        setComputerChoice(computerChoice);
        setChoiceSelected(true)
    }

    const setResultHandler = (result) => {
        setResult(result);
        setGameFinished(true);
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
                    onResult={setResultHandler}
                />
            )}
            {gameFinished && (<GameResult
                userChoice={userChoice}
                computerChoice={computerChoice}
                result={result}
            />)}
        </div>
    )
};

export default Game;