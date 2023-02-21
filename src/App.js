import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';
import {useState} from "react";
import './App.css';

function App() {
    const [choiceSelected, setChoiceSelected] = useState(true);
    const [user, setUser] = useState({name: 'user', choice: 'x'});
    const [computer, setComputer] = useState({name: 'computer', choice: 'o'});
    const [showOverlay, setShowOverlay] = useState(false);


    const handleChoice = (userChoice, computerChoice) => {
        // Updating user choice and computer choice
        setUser({...user, choice: userChoice});
        setComputer({...computer, choice: computerChoice});

        // Setting choice selected to true
        setChoiceSelected(true)
    };

    const handleChoiceSwap = () => {
        let tempChoice = user.choice;

        // Swapping the choices
        setUser({...user, choice: computer.choice})
        setComputer({...computer, choice: tempChoice});
    }

    // Quit Button Handler
    const handleQuit = () => {
        setChoiceSelected(false);
        handleHideOverlay();
    };

    // Overlay Handlers
    const handleShowOverlay = () => {
        setShowOverlay(true);
    }

    const handleHideOverlay = () => {
        setShowOverlay(false);
    }

    return (
        <div className="app">
            {showOverlay && <div className='overlay'></div>}

            {!choiceSelected ? (
                <Choice onChoice={handleChoice}/>
            ) : (
                <Game
                    user={user}
                    computer={computer}
                    onQuit={handleQuit}
                    swapChoices={handleChoiceSwap}
                    showOverlay={handleShowOverlay}
                    hideOverlay={handleHideOverlay}
                />
            )}
        </div>
    );
}

export default App;
