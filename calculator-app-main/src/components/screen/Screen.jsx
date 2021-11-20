import './screen.css'
import { useState } from 'react';

const Screen = ({ value = 0}) => {
    
    return (
        <div className="s-main">
            <div className="s-text">
                <div className="s-value">
                    {value.toString().length > 15 ? value.toString().slice(0,15-value.toString().length) : value.toString()}
                </div>
            </div>
            
        </div>
    )
}

export default Screen
