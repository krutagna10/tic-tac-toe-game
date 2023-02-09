import './GameButton.css';

const GameButton = (props) => {
    return (
        <button className='game__btn' data-value={props.value}></button>
    )
}

export default GameButton;