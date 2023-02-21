import {useState} from "react";
import Flex from '../../layouts/Flex/Flex';
import Button from '../UI/Button/Button';
import './ChoiceForm.css'

const ChoiceForm = (props) => {
    const [userChoice, setUserChoice] = useState('o');

    const handleUserChoiceChange = (event) => {
        setUserChoice(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let computerChoice = userChoice === 'x' ? 'o' : 'x';
        props.onChoice(userChoice, computerChoice);
    }

    return (
        <div className='choice__form-wrapper'>
            <form className='choice__form' onSubmit={handleSubmit}>
                <div className='choice__form-control background-semi-dark flow'>
                    <h1 className='choice__form-heading font-size-300 text-silver'>
                        Pick player 1's mark
                    </h1>
                    <Flex className='choice__input-wrapper'>
                        <input type='radio'
                               name='choice__input'
                               id='choice__input--x'
                               className='choice__input'
                               onChange={handleUserChoiceChange}
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
                               onChange={handleUserChoiceChange}
                               value='o'
                               checked={userChoice === 'o'}
                        />
                        <label
                            className='choice__label choice__label--o'
                            htmlFor='choice__input--o'
                        />
                    </Flex>
                    <p className='choice__form-text font-size-100'>Remember: X goes first</p>
                </div>
                <Button type='submit' className='choice__btn btn--yellow font-size-300'>New Game (vs CPU)</Button>
            </form>
        </div>
    )
};

export default ChoiceForm;