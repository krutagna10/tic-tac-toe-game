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
    const [scores, setScores] = useState({
        user: 0,
        computer: 0,
        tie: 0,
    });

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
        setScores(result);

        if (result === 'win') {
            setWinner({...user});
        } else if (result === 'lose') {
            setWinner({...computer});
        }
        setGameFinished(true);
    }

    const setScoresHandler = (result) => {
        setScores(prevScores => {
            if (result === 'win') {
                prevScores.user = prevScores.user + 1;
            } else if (result === 'lose') {
                prevScores.computer = prevScores.computer + 1;
            } else {
                prevScores.tie = prevScores.tie + 1;
            }
            return prevScores;
        })
    }

    const nextRoundHandler = () => {
        setGameFinished(false);
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
                    onSetScores={setScoresHandler}
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