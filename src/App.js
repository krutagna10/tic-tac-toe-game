import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';
import {useState} from "react";
import './App.css';

// Win Condition Array
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function App() {
    const [choiceSelected, setChoiceSelected] = useState(false);
    const [user, setUser] = useState({ name: 'user', choice: ''});
    const [computer, setComputer] = useState({ name: 'computer', choice: ''});
    const [showOverlay, setShowOverlay] = useState(false);


    const setChoicesHandler = (userChoice, computerChoice) => {
        // Updating user choice and computer choice
        setUser(prevState => ({...prevState, choice: userChoice}));
        setComputer(prevState => ({...prevState, choice: computerChoice}));

        // Setting choice selected to true
        setChoiceSelected(true)
    };

    const swapChoicesHandler = () => {
        let tempChoice = user.choice;

        // Swapping the choices
        setUser(prevState => ({...prevState, choice: computer.choice}));
        setComputer(prevState => ({...prevState, choice: tempChoice}));
    }

    // Quit Button Handler
    const quitHandler = () => {
        setChoiceSelected(false);
        hideOverlayHandler();
    };

    // Overlay Handlers
    const showOverlayHandler = () => {
        setShowOverlay(true);
    }

    const hideOverlayHandler = () => {
        setShowOverlay(false);
    }

    return (
        <div className="app">
            {showOverlay && (
                <div className='overlay'></div>
            )}

            {!choiceSelected && (
                <Choice onChoice={setChoicesHandler}/>
            )}

            {choiceSelected && (
                <Game
                    user={user}
                    computer={computer}
                    winConditions={winConditions}
                    onQuit={quitHandler}
                    swapChoices={swapChoicesHandler}
                    showOverlay={showOverlayHandler}
                    hideOverlay={hideOverlayHandler}
                />
            )}
        </div>
    );
}

export default App;
