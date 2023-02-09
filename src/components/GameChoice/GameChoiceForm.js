import './GameChoiceForm.css'
import {useState} from "react";

const GameChoiceForm = (props) => {
    const [userChoice, setUserChoice] = useState('o');

    const clickHandler = (event) => {
        setUserChoice(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        let computerChoice = userChoice === 'x' ? 'o' : 'x';
        props.onChoice(userChoice, computerChoice);
    }

    return (
        <div className='choice__form-wrapper'>
            <form className='choice__form' onSubmit={formSubmitHandler}>
                <div className='choice__form-control background-semi-dark-navy flow'>
                    <h1 className='choice__form-heading font-size-300 text-silver'>
                        Pick player 1's mark
                    </h1>
                    <div className='choice__input-wrapper flex'>
                        <input type='radio'
                               name='choice__input'
                               id='choice__input--x'
                               className='choice__input'
                               onChange={clickHandler}
                               value='x'
                               checked={userChoice === 'x'}
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
                               checked={userChoice === 'o'}
                        />
                        <label
                            className='choice__label choice__label--o'
                            htmlFor='choice__input--o'
                        />
                    </div>
                    <p className='choice__form-text font-size-100'>Remember: X goes first</p>
                </div>
                <button className='choice__btn btn btn--yellow font-size-300'>New Game (vs CPU)</button>
            </form>
        </div>
    )
};

export default GameChoiceForm;