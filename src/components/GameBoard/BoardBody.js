import './BoardBody.css';

import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";

const icons = {
    x: `url(${xIcon})`,
    o: `url(${oIcon})`,
}

const BoardBody = (props) => {
    const clickHandler = (event) => {
        const value = Number(event.target.dataset.value);
        event.target.classList.add('clicked');
        props.onUserChoice(value);
    }


    return (
        <div className='game__board-body grid grid--3-columns grid--gap'>
            {[...new Array(9)].map((_, index) => {
                if (props.userArray.includes(index) || props.computerArray.includes(index)) {
                    return (
                        <button key={index}
                                className='game__btn clicked'
                                data-value={index}
                                onClick={clickHandler}
                                style={{backgroundImage: icons.x}}
                        />
                    )
                } else {
                    return (
                        <button key={index}
                                className='game__btn'
                                data-value={index}
                                onClick={clickHandler}
                        />
                    )
                }
            })}
        </div>
    )
}

export default BoardBody;