import "./calculator.css";
import Header from "../header/Header";
import Screen from "../screen/Screen";
import Keyboard from "../keyboard/Keyboard";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState();
  const [keyPressed, setKeyPressed] = useState();
  const [resetPressed, setResetPressed] = useState(false);
  const [commaPressed, setCommaPressed] = useState(false);
  const [delPressed, setDelPressed] = useState(false);
  const [operationPressed, setOperationPressed] = useState();
  const [firstValue, setFirstValue] = useState(0);
  const [operation, setOperation] = useState();

  useEffect(() => {
    if (resetPressed) {
      setCurrentValue();
      setResetPressed(false);
      setCommaPressed(false);
    }
  }, [resetPressed]);

  useEffect(() => {
    if (delPressed) {
      const newValue = currentValue.toString().slice(0, -1);
      if (newValue.length === 0) setCurrentValue(0);
      else setCurrentValue(newValue);
      setDelPressed(false);
    }
  }, [delPressed]);

  useEffect(() => {
     
            if (keyPressed !== null) {
            if (!currentValue && keyPressed !== ".") setCurrentValue(keyPressed);
            else {
                if (keyPressed === '.' && commaPressed === false){
                    setCurrentValue(`${currentValue}${keyPressed}`);
                    setCommaPressed(true);
                 }else{
                    if(keyPressed !=='.') setCurrentValue(`${currentValue}${keyPressed}`);
                 }
            }
        }
    setKeyPressed(null);
  }, [keyPressed, currentValue]);

  useEffect(() => {
    setCommaPressed(false);
    if (operationPressed === "add") {
      setFirstValue(currentValue);
      setCurrentValue(0);
      setOperation("add");
    }
    if (operationPressed === "sub"){
        setFirstValue(currentValue);
        setCurrentValue(0);
        setOperation("sub");
    }
    if (operationPressed === "mult"){
        setFirstValue(currentValue);
        setCurrentValue(0);
        setOperation("mult");
    }
    if (operationPressed === "div"){
        setFirstValue(currentValue);
        setCurrentValue(0);
        setOperation("div");
    }
    if (operationPressed === "equal"){
        if(operation==="add") setCurrentValue(parseFloat(firstValue)+ parseFloat(currentValue));
        if(operation==="sub") setCurrentValue(parseFloat(firstValue) - parseFloat(currentValue));
        if(operation==="mult") setCurrentValue(parseFloat(firstValue) * parseFloat(currentValue));
        if(operation==="div") setCurrentValue(parseFloat(firstValue) / parseFloat(currentValue));
    }
  }, [operationPressed]);

  const calculateValue = (value1, value2, operation) => {};

  return (
    <div className="c-main">
      <div className="c-wrapper">
        <Header />
        <Screen value={currentValue} />
        <Keyboard
          setKeyPressed={setKeyPressed}
          setResetPressed={setResetPressed}
          setDelPressed={setDelPressed}
          setOperationPressed={setOperationPressed}
          setCommaPressed={setCommaPressed}
        />
      </div>
    </div>
  );
};

export default Calculator;
