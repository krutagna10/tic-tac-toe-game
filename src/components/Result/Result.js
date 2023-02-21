import Grid from '../../layouts/Grid/Grid.js';
import Flex from "../../layouts/Flex/Flex";
import Button from "../UI/Button/Button";
import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import './Result.css';

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

const Result = ({result, winner, onNextRound, onQuit}) => {
    let roundText = result === 'draw' ? 'Round Tied' : 'Takes the round';

    return (
        <section className='result-section'>
            <Grid className='result background-semi-dark grid--items-center'>
                {result !== 'draw' && (
                    <p className='result__text font-size-200 text-silver'>
                        {resultText[result]}
                    </p>
                )}

                <Flex className='result__label flex--gap flex--align-center'>
                    {result !== 'draw' && (
                        <img className='result__icon'
                             src={icons[winner.choice]}
                             alt=''
                             aria-hidden='true'
                        />)}
                    <h1 className={`result__heading font-size-500 ${roundTextColor[winner.choice]}`}>
                        {roundText}
                    </h1>
                </Flex>

                <Flex className='result__buttons flex--gap'>
                    <Button className='btn--silver' onClick={onQuit}>
                        Quit
                    </Button>
                    <Button className='btn--yellow' onClick={onNextRound}>
                        Next Round
                    </Button>
                </Flex>
            </Grid>
        </section>
    )
};

export default Result;