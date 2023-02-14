import GameMain from '../GameMain/GameMain';
import GameResult from '../GameResult/GameResult';
import './Game.css';
import {useState} from "react";

const Game = (props) => {
    const [gameFinished, setGameFinished] = useState(false);
    const [winner, setWinner] = useState({choice: ''});
    const [result, setResult] = useState('');


    const setResultHandler = (result) => {
        setResult(result);

        if (result === 'win') {
            setWinner({...props.user});
        } else if (result === 'lose') {
            setWinner({...props.computer});
        }
        setGameFinished(true);
    };

    const nextRoundHandler = () => {
        setGameFinished(false);
    };

    return (
        <div className='game'>
            <GameMain
                user={props.user}
                computer={props.computer}
                onResult={setResultHandler}
            />
            {gameFinished && (<GameResult
                result={result}
                winner={winner}
                onNextRound={nextRoundHandler}
            />)}
        </div>
    )
};

export default Game;