import GameMainHeader from "./GameMainHeader";
import GameButton from "./GameButton";
import './GameMain.css';

const GameMain = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='game flow'>
            <GameMainHeader/>
            <div className='game__board grid grid--3-columns grid--gap'>
                {arr.map((element, index) => (
                    <GameButton
                        value={element}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
};

export default GameMain;

