import GameChoice from "../GameChoice/GameChoice";
import GameMain from '../GameMain/GameMain';
import GameResult from '../GameResult/GameResult';
import './Game.css';
import {useState} from "react";

const Game = () => {
    const [choiceSelected, setChoiceSelected] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);

    const [user, setUser] = useState({choice: ''});
    const [computer, setComputer] = useState({choice: ''});
    const [winner, setWinner] = useState({choice: ''});

    const [result, setResult] = useState('');

    console.log(user, computer);

    const setChoicesHandler = (userChoice, computerChoice) => {
        setUser(prevState => {
            prevState.choice = userChoice;
            return prevState;
        })
        setComputer(prevState => {
            prevState.choice = computerChoice;
            return prevState;
        })
        setChoiceSelected(true)
    }

    const setResultHandler = (result) => {
        setResult(result);
        if (result === 'win') {
            setWinner({...user});
        } else if (result === 'lose') {
            setWinner({...computer});
        }
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
                    user={user}
                    computer={computer}
                    onResult={setResultHandler}
                />
            )}
            {gameFinished && (<GameResult
                result={result}
                winner={winner}
            />)}
        </div>
    )
};

export default Game;