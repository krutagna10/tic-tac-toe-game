import Flex from '../../../layouts/Flex/Flex';
import './BoardFooter.css'

const BoardFooter = ({scores, user}) => {
    const xLabelText = user.choice === 'x' ? 'X(You)' : 'X(Cpu)';
    const oLabelText = user.choice === 'x' ? 'O(Cpu)' : 'O(You)'
    const xScore = user.choice === 'x' ? scores.user : scores.computer;
    const oScore = user.choice === 'x' ? scores.computer : scores.user;

    return (
        <Flex className='game__board-footer flex--justify-space flex--gap'>
            <div className='game__score-wrapper background-blue'>
                <p className='game__score-label'>{xLabelText}</p>
                <p className='game__score game__score--x'>{xScore}</p>
            </div>
            <div className='game__score-wrapper background-silver'>
                <p className='game__score-label'>Ties</p>
                <p className='game__score game__score--draw'>{scores.draw}</p>
            </div>
            <div className='game__score-wrapper background-yellow'>
                <p className='game__score-label'>{oLabelText}</p>
                <p className='game__score game__score-o'>{oScore}</p>
            </div>
        </Flex>
    )
}

export default BoardFooter;