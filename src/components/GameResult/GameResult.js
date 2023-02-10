import {useState} from "react";

import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import './GameResult.css';

const icons = {
    x: xIcon,
    o: oIcon,
}

const GameResult = (props) => {
    let resultText = '';
    console.log(props)
    if (props.result === 'user') {
        resultText = 'You won';
    } else if (props.result === 'computer') {
        resultText = 'Oh no, you lost...';
    }

    return (
        <section className='result-section'>
            <div className='result grid grid--items-center background-semi-dark'>
                <p className='result__text font-size-200 text-silver'>{resultText}</p>

                <div className='result__label flex flex--gap flex--align-center'>
                    <img className='result__icon'
                         src={icons[props.userChoice]}
                         alt=''
                         aria-hidden='true'
                    />
                    <h1 className='result__heading font-size-500 text-blue'>Takes the round</h1>
                </div>

                <div className='result__buttons flex flex--gap'>
                    <button className='btn btn--silver'>Quit</button>
                    <button className='btn btn--yellow'>Next Round</button>
                </div>
            </div>
        </section>
    )
};

export default GameResult;