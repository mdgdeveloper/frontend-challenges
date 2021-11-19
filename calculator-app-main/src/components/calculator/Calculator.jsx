import "./calculator.css";
import Header from "../header/Header";
import Screen from "../screen/Screen";
import Keyboard from "../keyboard/Keyboard";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState();
  const [keyPressed, setKeyPressed] = useState();

  useEffect(() => {
      console.log(keyPressed);
    if (keyPressed !== null) {
      if (!currentValue) setCurrentValue(keyPressed);
      else {
        setCurrentValue(`${currentValue}${keyPressed}`);
      }
    }
    setKeyPressed(null);
  }, [keyPressed, currentValue]);

  return (
    <div className="c-main">
      <div className="c-wrapper">
        <Header />
        <Screen value={currentValue} />
        <Keyboard setKeyPressed={setKeyPressed} />
      </div>
    </div>
  );
};

export default Calculator;
