import './screen.css'
import { useState } from 'react';

const Screen = ({ value = 0}) => {
    // const [currentValue, setCurrentValue] = useState((value % 1) === 0 ? `${value}.` : value);
    // const [currentValue, setCurrentValue] = useState(value);
    
    return (
        <div className="s-main">
            <div className="s-text">
                <div className="s-value">{value}</div>
            </div>
            
        </div>
    )
}

export default Screen
