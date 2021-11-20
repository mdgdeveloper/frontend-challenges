import "./calculator.css";
import Header from "../header/Header";
import Screen from "../screen/Screen";
import Keyboard from "../keyboard/Keyboard";
import { useState } from "react";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState();
  const [keyPressed, setKeyPressed] = useState();
  const [resetPressed, setResetPressed] = useState(false);
  const [commaPressed, setCommaPressed] = useState(false);
  const [delPressed, setDelPressed] = useState(false);
  const [operationPressed, setOperationPressed] = useState();
  const [firstValue, setFirstValue] = useState(0);
  const [operation, setOperation] = useState();


    if (resetPressed) {
      setCurrentValue();
      setResetPressed(false);
      setCommaPressed(false);
    }

    if (delPressed) {
      const newValue = currentValue.toString().slice(0, -1);
      if (newValue.length === 0) setCurrentValue(0);
      else setCurrentValue(newValue);
      setDelPressed(false);
    }
 
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
          setKeyPressed(null);
        }
    
   if(operationPressed !== null)
    if (operationPressed === "add" || "sub" || "mult" || "div") {
      setFirstValue(currentValue);
      setCurrentValue(0);
      setOperation(operationPressed);
      setOperationPressed(null);
      setCommaPressed(false);
    }
    if (operationPressed === "equal"){
        if(operation==="add") setCurrentValue(parseFloat(firstValue)+ parseFloat(currentValue));
        if(operation==="sub") setCurrentValue(parseFloat(firstValue) - parseFloat(currentValue));
        if(operation==="mult") setCurrentValue(parseFloat(firstValue) * parseFloat(currentValue));
        if(operation==="div") setCurrentValue(parseFloat(firstValue) / parseFloat(currentValue));
        setOperationPressed(null);
        setCommaPressed(false);
    }

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
