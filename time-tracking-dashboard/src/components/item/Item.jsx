import "./item.css";
import Elipsis from "../../images/icon-ellipsis.svg";

const Item = ({ type, time, lastTime }) => {
  const style = {
    Work: "d-item-work d-item-responsive",
    Play: "d-item-play d-item-responsive",
    Study: "d-item-study d-item-responsive",
    Exercise: "d-item-exercise d-item-responsive",
    Social: "d-item-social d-item-responsive",
    "Self Care": "d-item-self-care d-item-responsive",
  };

  const styleTop = {
    Work: "d-item-work-top",
    Play: "d-item-play-top",
    Study: "d-item-study-top",
    Exercise: "d-item-exercise-top",
    Social: "d-item-social-top",
    "Self Care": "d-item-self-care-top",
  };

  return (
    <div className={style[type]}>
      <div className={styleTop[type]}></div>
      <div className="d-item-bottom">
        <div className="d-item-menu">
          <div className="d-item-menu-item">{type}</div>
          <div className="d-item-menu-item">
            <img src={Elipsis} alt="" className="d-elipsis" />
          </div>
        </div>
        <div className="d-item-time">{time}hrs</div>
        <div className="d-item-info">Last Week - {lastTime}hrs</div>
      </div>
    </div>
  );
};

export default Item;
