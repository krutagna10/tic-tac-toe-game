import GameChoice from "../GameChoice/GameChoice";
import GameMain from '../GameMain/GameMain';
import GameResult from '../GameResult/GameResult';
import './Game.css';
import {useState} from "react";

const Game = () => {
    const [choiceSelected, setChoiceSelected] = useState(true);
    const [gameFinished, setGameFinished] = useState(false);

    const [user, setUser] = useState({choice: 'x'});
    const [computer, setComputer] = useState({choice: 'o'});
    const [winner, setWinner] = useState({choice: ''});

    const [result, setResult] = useState('');

    const setChoicesHandler = (userChoice, computerChoice) => {
        setUser(user => {
            user.choice = userChoice;
            return user;
        })
        setComputer(computer => {
            computer.choice = computerChoice;
            return computer;
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
    };

    let resetFunction;

    const passFunctionHandler = (reset) => {
        resetFunction = reset;
    }

    const nextRoundHandler = () => {
        setGameFinished(false);
        resetFunction();
    };

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
                    onPlayAgain={passFunctionHandler}
                />
            )}
            {gameFinished && (<GameResult
                result={result}
                winner={winner}
                onNextRound={nextRoundHandler}
            />)}
        </div>
    )
};

export default Game;