import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import './GameResult.css';

const icons = {
    x: xIcon,
    o: oIcon,
}

const GameResult = (props) => {
    let winner = {};

    if (props.result === 'win') {
        winner = {...props.user};
    } else if (props.result === 'lose') {
        winner = {...props.computer};
    } else {
        // When the result is draw
        winner = {name: 'draw', choice: ''};
    }

    let resultText = '';
    let roundText = props.result === 'draw' ? 'Round Tied' : 'Takes the round';


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
                    {props.result !== 'draw' && (
                        <img className='result__icon'
                             src={icons[winner.choice]}
                             alt=''
                             aria-hidden='true'
                        />)}
                    <h1 className='result__heading font-size-500 text-blue'>
                        {roundText}
                    </h1>
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