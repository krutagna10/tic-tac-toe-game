import Flex from '../../../layouts/Flex/Flex';
import Button from '../../UI/Button/Button';
import gameLogo from "../../../assets/logo.svg";
import restartIcon from "../../../assets/icon-restart.svg";
import './BoardHeader.css'


const BoardHeader = (props) => {
    return (
        <Flex className='game__header flex--justify-space flex--align-center'>
            <div className='game__logo-wrapper'>
                <img className='game__logo'
                     src={gameLogo}
                     alt='Tic Tac Toe'
                />
            </div>
            <Button className='game__restart-btn btn btn--silver' onClick={props.onRestart}>
                <img className='game__restart-icon'
                     src={restartIcon}
                     alt=''
                     aria-hidden='true'
                />
            </Button>
        </Flex>
    )
};

export default BoardHeader;