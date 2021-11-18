import './toggle.css'

const Toggle = () => {
    return (
        <div className="t-main">
            <div className="t-header">
                <div className="t-number">1</div>
                <div className="t-number">2</div>
                <div className="t-number">3</div>
            </div>
            <div className="t-switch">
                <div className="t-ball"></div>
                <div className="t-ball t-no-show"></div>
                <div className="t-ball t-no-show"></div>
            </div>

        </div>
    )
}

export default Toggle
