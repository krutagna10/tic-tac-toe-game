import ChoiceForm from "./ChoiceForm";
import Grid from "../../layouts/Grid/Grid";
import logo from "../../assets/logo.svg";
import "./Choice.css";

const Choice = (props) => {
  const getChoiceHandler = (userChoice, computerChoice) => {
    props.onChoice(userChoice, computerChoice);
  };

  return (
    <section className="choice-section">
      <Grid className="choice container grid--items-center grid--gap">
        <div className="choice__logo-wrapper">
          <img src={logo} alt="Tic Tac Toe Game" />
        </div>
        <ChoiceForm onChoice={getChoiceHandler} />
      </Grid>
    </section>
  );
};

export default Choice;