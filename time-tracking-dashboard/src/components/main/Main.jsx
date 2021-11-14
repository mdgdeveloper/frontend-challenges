import "./main.css";
import Profile from "../../images/image-jeremy.png";

import Item from "../item/Item";

const Main = ({ data }) => {
  return (
    <div className="m-global">
      <div className="m-wrapper">
        <div className="m-left">
          <div className="p-main">
            <div className="p-wrapper">
              <div className="p-top">
                <img src={Profile} alt="" className="p-image" />
                <div className="p-info">
                  <div className="p-info-message">Report for</div>
                  <div className="p-info-name">Sergio Madrigal</div>
                </div>
              </div>
              <div className="p-bottom">
                <div className="p-list">
                  <div className="p-item">Daily</div>
                  <div className="p-item">Weekly</div>
                  <div className="p-item">Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-right">
          <div className="d-main">
            <div className="d-main-row d-top-row">
              {data.map((element) => {

                  return (<Item type={element.type} time={element.time} lastTime={element.lastTime}/>) 
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
