import './header.css';
import Fire from './fire.png'

const Header = () => {
    return (
        <div className="h-main">
            <div className="h-wrapper">
                <div className="h-left">Where in the world?</div>
                <div className="h-right">
                    <div className="h-icon"><img src={Fire} alt="fire" className="h-img" /></div>
                    <div className="h-text">Dark Mode</div>
                </div>
            </div>
        </div>            
    )
}

export default Header
