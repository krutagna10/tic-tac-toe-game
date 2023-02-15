import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';
import {useState} from "react";

function App() {
    // Choice selected state for hiding or displaying Game
    const [choiceSelected, setChoiceSelected] = useState(true);

    // User state which is an object with name: user, and choice: userChoice
    const [user, setUser] = useState({ name: 'user', choice: 'o'});

    // Computer state which is an object with name: computer, and choice: computerChoice
    const [computer, setComputer] = useState({ name: 'computer', choice: 'x'});


    const setChoicesHandler = (userChoice, computerChoice) => {
        // Updating user choice
        setUser(prevState => ({...prevState, choice: userChoice}));

        // Updating computer choice
        setComputer(prevState => ({...prevState, choice: computerChoice}));

        // Setting choice selected to true
        setChoiceSelected(true)
    };

    const swapChoicesHandler = () => {
        // Storing userChoice in tempChoice variable
        let tempChoice = user.choice;

        // Setting userChoice to computerChoice
        setUser(prevState => ({...prevState, choice: computer.choice}));

        // Setting computerChoice to userChoice
        setComputer(prevState => ({...prevState, choice: tempChoice}));
    }

    // Quit Button Handler
    const quitHandler = () => {
        setChoiceSelected(false);
    }

    return (
        <div className="app">
            {!choiceSelected && (
                <Choice onChoice={setChoicesHandler}/>
            )}
            {choiceSelected && (
                <Game
                    user={user}
                    computer={computer}
                    onQuit={quitHandler}
                    swapChoices={swapChoicesHandler}
                />
            )}
        </div>
    );
}

export default App;
