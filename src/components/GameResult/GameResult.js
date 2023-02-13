import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import './GameResult.css';

const icons = {
    x: xIcon,
    o: oIcon,
}

const GameResult = (props) => {
    let resultText = '';
    let roundText = props.result === 'draw' ? 'Round Tied' : 'Takes the round';
    let roundTextClassList = 'result__heading font-size-500 ';

    if (props.winner.choice === 'x') {
        roundTextClassList = roundTextClassList + 'text-blue';
    } else if (props.winner.choice === 'o') {
        roundTextClassList = roundTextClassList + 'text-yellow';
    } else {
        roundTextClassList = roundTextClassList + 'text-silver';
    }

    if (props.result === 'win') {
        resultText = 'You won';
    } else if (props.result === 'lose') {
        resultText = 'Oh no, you lost...';
    }

    return (
        <section className='result-section'>
            <div className='result grid grid--items-center background-semi-dark'>
                {props.result !== 'draw' && (
                    <p className='result__text font-size-200 text-silver'>{resultText}</p>
                )}

                <div className='result__label flex flex--gap flex--align-center'>
                    {props.result !== 'draw' && (<img className='result__icon'
                         src={icons[props.winner.choice]}
                         alt=''
                         aria-hidden='true'
                    />)}
                    <h1 className={roundTextClassList}>{roundText}</h1>
                </div>

                <div className='result__buttons flex flex--gap'>
                    <button className='btn btn--silver'>Quit</button>
                    <button className='btn btn--yellow' onClick={props.onNextRound}>Next Round</button>
                </div>
            </div>
        </section>
    )
};

export default GameResult;