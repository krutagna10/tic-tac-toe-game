import './BoardBody.css';
import xOutline from '../../assets/icon-x-outline.svg';
import oOutline from '../../assets/icon-o-outline.svg';

const outline = {
    x: `url(${xOutline})`,
    o: `url(${oOutline})`,
}

const BoardBody = (props) => {
    const clickHandler = (event) => {
        const value = Number(event.target.dataset.value);
        event.target.classList.add('clicked');
        props.onUserChoice(value);
    }

    const mouseOverHandler = (event) => {
        if (!event.target.classList.contains('clicked')) {
            event.target.style.backgroundImage = outline[props.user.choice];
        }
    }

    const mouseOutHandler = (event) => {
        if (!event.target.classList.contains('clicked')) {
            event.target.style.backgroundImage = `none`;
        }
    }

    return (
        <div className='game__board-body grid grid--3-columns grid--gap'>
            {props.gameButtons.map((element, index) => (
                <button
                    key={index}
                    className='game__btn'
                    data-value={index}
                    onClick={clickHandler}
                    onMouseOver={mouseOverHandler}
                    onMouseOut={mouseOutHandler}
                    ref={element}
                />
            ))}
        </div>
    )
}

export default BoardBody;