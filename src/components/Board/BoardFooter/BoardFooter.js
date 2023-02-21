import Flex from '../../../layouts/Flex/Flex';
import './BoardFooter.css'

const BoardFooter = (props) => {
    let xLabelText = '';
    let oLabelText = '';
    let xScore;
    let oScore;

    if (props.user.choice === 'x') {
        // Setting the scores
        xScore = props.scores.user;
        oScore = props.scores.computer;

        // Setting the label texts
        xLabelText = 'X(YOU)';
        oLabelText = 'O(CPU)';
    } else {
        // Setting the scores
        xScore = props.scores.computer;
        oScore = props.scores.user;

        // Setting the label texts
        xLabelText = 'X(CPU)';
        oLabelText = 'O(YOU)';
    }

    return (
        <Flex className='game__board-footer flex--justify-space flex--gap'>
            <div className='game__score-wrapper background-blue'>
                <p className='game__score-label'>{xLabelText}</p>
                <p className='game__score game__score--x'>{xScore}</p>
            </div>
            <div className='game__score-wrapper background-silver'>
                <p className='game__score-label'>Ties</p>
                <p className='game__score game__score--draw'>{props.scores.draw}</p>
            </div>
            <div className='game__score-wrapper background-yellow'>
                <p className='game__score-label'>{oLabelText}</p>
                <p className='game__score game__score-o'>{oScore}</p>
            </div>
        </Flex>
    )
}

export default BoardFooter;