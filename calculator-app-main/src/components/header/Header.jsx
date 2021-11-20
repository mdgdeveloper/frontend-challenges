import "./header.css";
import Toggle from '../toggle/Toggle';

const Header = () => {
  return (
    <div className="h-main">
      <div className="h-wrapper">
        <div className="h-right">MDG-Calc</div>
        <div className="h-center"></div>
        <div className="h-left">
          <div className="h-theme-title">Theme</div>
          <div className="h-theme-toggle"><Toggle /></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
