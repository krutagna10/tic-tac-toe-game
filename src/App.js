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
        setUser(user => {
            user.choice = userChoice;
            return user;
        })

        setComputer(computer => {
            computer.choice = computerChoice;
            return computer;
        })
        setChoiceSelected(true)
    };

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
                />
            )}
        </div>
    );
}

export default App;
