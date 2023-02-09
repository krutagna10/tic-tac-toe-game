import GameChoiceForm from "./GameChoiceForm";
import logo from '../../assets/logo.svg';
import './GameChoice.css';

const GameChoice = () => {
    const getChoiceHandler = (userChoice, computerChoice) => {
        console.log(`User Choice : ${userChoice} | Computer Choice : ${computerChoice}`);
    }

    return (
        <section className='choice-section'>
            <div className='choice container grid grid--items-center grid--gap'>
                <div className='choice__logo-wrapper'>
                    <img
                        src={logo}
                        alt='Tic Tac Toe Game'
                    />
                </div>
                <GameChoiceForm
                    onChoice={getChoiceHandler}
                />
            </div>
        </section>
    )
}

export default GameChoice;