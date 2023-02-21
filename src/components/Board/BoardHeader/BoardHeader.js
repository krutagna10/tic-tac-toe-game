import gameLogo from "../../../assets/logo.svg";

import restartIcon from "../../../assets/icon-restart.svg";
import './BoardHeader.css'


const BoardHeader = (props) => {
    return (
        <div className='game__header flex flex--justify-space flex--align-center'>
            <div className='game__logo-wrapper'>
                <img className='game__logo'
                     src={gameLogo}
                     alt='Tic Tac Toe'
                />
            </div>
            <button className='game__restart-btn btn btn--silver' onClick={props.onRestart}>
                <img className='game__restart-icon'
                     src={restartIcon}
                     alt=''
                     aria-hidden='true'
                />
            </button>
        </div>
    )
};

export default BoardHeader;