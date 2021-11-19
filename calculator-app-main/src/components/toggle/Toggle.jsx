import './toggle.css'
import { useState } from 'react';

const Toggle = () => {
    const [ballStyle, setBallStyle] = useState('t-ball');
    const [theme, setTheme] = useState(1);

    const toggleUp = () => {
        if(theme === 1){
            setBallStyle('t-ball t-ball-2')
            setTheme(2);
        }else if(theme === 2){
            setBallStyle('t-ball t-ball-3')
            setTheme(3)
        }else{
            setBallStyle('t-ball')
            setTheme(1);
        }
    }
    
    return (
        <div className="t-main">
            <div className="t-header">
                <div className="t-number">1</div>
                <div className="t-number">2</div>
                <div className="t-number">3</div>
            </div>
            <div className="t-switch">
            <div onClick={toggleUp} className={ballStyle}></div>
            </div>

        </div>
    )
}

export default Toggle
