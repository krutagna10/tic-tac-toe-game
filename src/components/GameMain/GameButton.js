import './GameButton.css';
import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';

const icons = {
    x: xIcon,
    o: oIcon,
}

const GameButton = (props) => {
    const clickHandler = (event) => {
        event.target.style.backgroundImage = `url(${icons[props.userChoice]})`;
        props.onSelect(Number(event.target.dataset.value));
    }

    return (
        <button className='game__btn' data-value={props.value} onClick={clickHandler}></button>
    )
}

export default GameButton;