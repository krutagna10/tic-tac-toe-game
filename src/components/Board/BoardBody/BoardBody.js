import Grid from '../../../layouts/Grid/Grid';
import './BoardBody.css';

import xIcon from "../../../assets/icon-x.svg";
import oIcon from "../../../assets/icon-o.svg";


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

    const indexExists = (index) => {
        // Used set for faster performance
        const indices = new Set([...props.userArray, ...props.computerArray]);

        return indices.has(index);
    }


    return (
        <Grid className='game__board-body grid grid--3-columns grid--gap'>
            {[...new Array(9)].map((_, index) => (
                indexExists(index) ? (
                    <button key={index}
                            className='game__btn clicked'
                            data-value={index}
                            onClick={clickHandler}
                            style={{
                                backgroundImage: props.userArray.includes(index)
                                    ? icons[props.user.choice]
                                    : icons[props.computer.choice]
                            }}
                    />
                ) : (
                    <button key={index}
                            className='game__btn'
                            data-value={index}
                            onClick={clickHandler}
                    />
                )
            ))}
        </Grid>
    )
}

export default BoardBody;