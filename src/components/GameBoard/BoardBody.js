

const BoardBody = (props) => {
    const clickHandler = (event) => {
        const value = Number(event.target.dataset.value);
        props.onUserChoice(value);
    }

    return (
        <div className='game__board-body grid grid--3-columns grid--gap'>
            {props.gameButtons.map((element, index) => (
                <button
                    key={index}
                    className='game__btn'
                    data-value={index}
                    onClick={clickHandler}
                    ref={element}
                />
            ))}
        </div>
    )
}

export default BoardBody;