import './item.css';
import Elipsis from '../../images/icon-ellipsis.svg';

const Item = ({type, time, lastTime}) => {
    const style = {
        "Work": "d-item-work",
        "Play": "d-item-play",
        "Study": "d-item-study",
        "Exercise": "d-item-exercise",
        "Social": "d-item-social",
        "Self Care": "d-item-self-care"
    }

    const styleTop = {
        "Work": "d-item-work-top",
        "Play": "d-item-play-top",
        "Study": "d-item-study-top",
        "Exercise": "d-item-exercise-top",
        "Social": "d-item-social-top",
        "Self Care": "d-item-self-care-top"
    }


    return (
        <div className={style[type]}>
        <div className={styleTop[type]}>

        </div>
        <div className="d-item-bottom">
            <div className="d-item-menu">
                <div className="d-item-menu-item">{type}</div>
                <div className="d-item-menu-item"><img src={Elipsis} alt="" className="d-elipsis" /></div>
            </div>
            <div className="d-item-time">{time}hrs</div>
            <div className="d-item-info">Last Week - {lastTime}hrs</div>
        </div>
    </div>
    )
}

export default Item
