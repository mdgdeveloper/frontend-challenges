import Key from '../key/Key';
import './keyboard.css';

const Keyboard = ({ setKeyPressed, setResetPressed, setDelPressed, setOperationPressed }) => {
    return (
        <div className="k-main">
            <div className="k-wrapper">
                <div className="k-line">
                    <div className="k-key"><Key value="7" type="number" setKeyPressed={setKeyPressed} /></div>
                    <div className="k-key"><Key value="8" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="9" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="del" type="del" setKeyPressed={setDelPressed}/></div>
                </div>
                <div className="k-line">
                    <div className="k-key"><Key value="4" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="5" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="6" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="+" type="add" setKeyPressed={setOperationPressed}/></div>
                </div>
                <div className="k-line">
                    <div className="k-key"><Key value="1" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="2" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="3" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="-" type="sub" setKeyPressed={setOperationPressed}/></div>
                </div>
                <div className="k-line">
                    <div className="k-key"><Key value="." type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="0" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="/" type="div" setKeyPressed={setOperationPressed}/></div>
                    <div className="k-key"><Key value="X" type="mult" setKeyPressed={setOperationPressed}/></div>
                </div>
                <div className="k-line">
                    <div className="k-big-key"><Key value="reset" type="reset" setKeyPressed={setResetPressed}/></div>
                    <div className="k-big-key"><Key value="=" type="equal" setKeyPressed={setOperationPressed}/></div>
                </div>
            </div>
            
        </div>
    )
}

export default Keyboard
