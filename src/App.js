import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';
import {useState} from "react";
import './App.css';

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
