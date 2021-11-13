import './main.css';
import Profile from '../../images/image-jeremy.png'

import Item from '../item/Item';

const Main = () => {
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
                                    <div className="p-info-name">Jeremy Robson</div>
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
                            <Item type="Work" time="32" lastTime="36"/>
                            <Item type="Play"time="10" lastTime="8"/>
                            <Item type="Study" time="4" lastTime="7"/>
                        </div>
                        <div className="d-main-row">
                            <Item type="Exercise" time="4" lastTime="5"/>
                            <Item type="Social" time="5" lastTime="10"/>
                            <Item type="Self Care" time="2" lastTime="2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
