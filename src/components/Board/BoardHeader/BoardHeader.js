import Flex from "../../../layouts/Flex/Flex";
import gameLogo from "../../../assets/logo.svg";
import "./BoardHeader.css";

const BoardHeader = () => {
  return (
    <Flex className="game__header flex--center">
      <div className="game__logo-wrapper">
        <img className="game__logo" src={gameLogo} alt="Tic Tac Toe" />
      </div>
    </Flex>
  );
};

export default BoardHeader;
