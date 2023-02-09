import gameLogo from "../../assets/logo.svg";
import turnIcon from "../../assets/icon-x-silver.svg";
import restartIcon from "../../assets/icon-restart.svg";
import './GameMainHeader.css'

const GameMainHeader = () => {
    return (
        <div className='game__header flex flex--justify-space flex--align-center'>
            <div className='game__logo-wrapper'>
                <img className='game__logo'
                     src={gameLogo}
                     alt='Rock Paper Scissors'
                />
            </div>
            <div className='game__turn flex flex--gap flex--justify-center flex--align-center background-semi-dark-navy'>
                <img className='game__turn-icon'
                     src={turnIcon}
                     alt=''
                     aria-hidden='true'
                />
                <p className='game__turn-text text-silver'>Turn</p>
            </div>
            <button className='game__restart-btn btn btn--silver'>
                <img className='game__restart-icon'
                     src={restartIcon}
                     alt=''
                     aria-hidden='true'
                />
            </button>
        </div>
    )
};

export default GameMainHeader;