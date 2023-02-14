import Choice from './components/Choice/Choice';
import Game from './components/Game/Game';
import {useState} from "react";

function App() {
    const [choiceSelected, setChoiceSelected] = useState(false);
    const [user, setUser] = useState({ name: 'user', choice: 'x'});
    const [computer, setComputer] = useState({ name: 'computer', choice: 'o'});

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
                />
            )}
        </div>
    );
}

export default App;
