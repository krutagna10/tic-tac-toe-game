import GameChoiceForm from "./GameChoiceForm";
import logo from '../../assets/logo.svg';
import './GameChoice.css';

const GameChoice = () => {
    return (
        <div className='choice container'>
            <div className='choice__logo-wrapper'>
                <img
                    src={logo}
                    alt='Tic Tac Toe Game'
                />
            </div>
            <GameChoiceForm/>
        </div>
    )
}

export default GameChoice;