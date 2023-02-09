import GameChoice from "../GameChoice/GameChoice";
import GameMain from '../GameMain/GameMain';
import './Game.css';
import {useState} from "react";

const Game = () => {
    const [choiceSelected, setChoiceSelected] = useState(false);

    const choiceSelectedHandler = () => {
        setChoiceSelected(true);
    }

    return (
        <div className='game'>
            {!choiceSelected && (
                <GameChoice
                    onChoice={choiceSelectedHandler}
                />
            )}
            {choiceSelected && (
                <GameMain/>
            )}
        </div>
    )
};

export default Game;