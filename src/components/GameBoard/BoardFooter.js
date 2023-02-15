import './BoardFooter.css'

const BoardFooter = () => {
    return (
        <div className='game__board-footer flex flex--justify-space flex--gap'>
            <div className='game__score-wrapper background-blue'>
                <p className='game__score-label'>X(You)</p>
                <p className='game__score game__score--x'>0</p>
            </div>
            <div className='game__score-wrapper background-silver'>
                <p className='game__score-label'>Ties</p>
                <p className='game__score game__score--draw'>0</p>
            </div>
            <div className='game__score-wrapper background-yellow'>
                <p className='game__score-label'>O(CPU)</p>
                <p className='game__score game__score-o'>0</p>
            </div>
        </div>
    )
}

export default BoardFooter;