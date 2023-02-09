import './GameChoiceForm.css'
import {useState} from "react";

const GameChoiceForm = () => {
    const [userChoice, setUserChoice] = useState('o');
    const [computerChoice, setComputerChoice] = useState('x');

    const clickHandler = (event) => {
        setUserChoice(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='choice__form-wrapper'>
            <form className='choice__form flow' onSubmit={formSubmitHandler}>
                <div className='choice__form-control background-semi-dark-navy flow'>
                    <h1 className='choice__form-heading font-size-300 text-silver'>
                        Pick player 1's mark
                    </h1>
                    <div className='choice__label-wrapper flex'>
                        <input type='radio'
                               name='choice__input'
                               id='choice__input--x'
                               className='choice__input'
                               onChange={clickHandler}
                               value='x'
                        />
                        <label
                            className='choice__label choice__label--x'
                            htmlFor='choice__input--x'
                        />

                        <input type='radio'
                               name='choice__input'
                               id='choice__input--o'
                               className='choice__input'
                               onChange={clickHandler}
                               value='o'
                               defaultChecked
                        />
                        <label
                            className='choice__label choice__label--o'
                            htmlFor='choice__input--o'
                        />
                    </div>
                    <p className='choice__form-text font-size-100'>Remember: X goes first</p>
                </div>
                <button className='choice__btn btn btn--yellow'>New Game (vs CPU)</button>
            </form>
        </div>
    )
};

export default GameChoiceForm;