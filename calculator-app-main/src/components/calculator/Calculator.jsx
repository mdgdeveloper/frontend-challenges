import "./calculator.css";
import Header from "../header/Header";
import Screen from "../screen/Screen";
import Keyboard from "../keyboard/Keyboard";

const Calculator = () => {
  return (
    <div className="c-main">
      <div className="c-wrapper">
          <Header/>
          <Screen/>
          <Keyboard/>
      </div>
    </div>
  );
};

export default Calculator;
