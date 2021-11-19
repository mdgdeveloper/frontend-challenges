import Key from '../key/Key';
import './keyboard.css';

const Keyboard = ({ setKeyPressed }) => {
    return (
        <div className="k-main">
            <div className="k-wrapper">
                <div className="k-line">
                    <div className="k-key"><Key value="7" type="number" setKeyPressed={setKeyPressed} /></div>
                    <div className="k-key"><Key value="8" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="9" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key /></div>
                </div>
                <div className="k-line">
                    <div className="k-key"><Key value="4" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="5" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="6" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key /></div>
                </div>
                <div className="k-line">
                    <div className="k-key"><Key value="1" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="2" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="3" type="number" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key /></div>
                </div>
                <div className="k-line">
                    <div className="k-key"><Key value="." setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="0" setKeyPressed={setKeyPressed}/></div>
                    <div className="k-key"><Key value="/"/></div>
                    <div className="k-key"><Key value="X"/></div>
                </div>
                <div className="k-line">
                    <div className="k-big-key"><Key value="reset"/></div>
                    <div className="k-big-key"><Key value="="/></div>
                </div>
            </div>
            
        </div>
    )
}

export default Keyboard
