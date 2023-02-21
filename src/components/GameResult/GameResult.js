import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import './GameResult.css';

const icons = {
    x: xIcon,
    o: oIcon,
}

const roundTextColor = {
    x: 'text-blue',
    o: 'text-yellow',
    draw: 'text-silver',
}

const resultText = {
    win: 'You won',
    lose: 'You lose',
}

const GameResult = (props) => {
    let roundText = props.result === 'draw' ? 'Round Tied' : 'Takes the round';

    return (
        <section className='result-section'>
            <div className='result grid grid--content-center background-semi-dark'>
                {props.result !== 'draw' && (
                    <p className='result__text font-size-200 text-silver'>
                        {resultText[props.result]}
                    </p>
                )}

                <div className='result__label flex flex--gap flex--align-center'>
                    {props.result !== 'draw' && (
                        <img className='result__icon'
                             src={icons[props.winner.choice]}
                             alt=''
                             aria-hidden='true'
                        />)}
                    <h1 className={`result__heading font-size-500 ${roundTextColor[props.winner.choice]}`}>
                        {roundText}
                    </h1>
                </div>

                <div className='result__buttons flex flex--gap'>
                    <button className='btn btn--silver' onClick={props.onQuit}>
                        Quit
                    </button>
                    <button className='btn btn--yellow' onClick={props.onNextRound}>
                        Next Round
                    </button>
                </div>
            </div>
        </section>
    )
};

export default GameResult;