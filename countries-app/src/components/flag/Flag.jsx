import "./flag.css";

const Flag = ({countryInfo}) => {
  return (
    <div className="f-main">
      <div className="f-wrapper">
        <div className="f-flag">
            <img src={countryInfo.flag} alt="" className="f-img" />
        </div>
        <div className="f-info">
          <div className="f-name">{countryInfo.name}</div>
          <div className="f-info-detail">
            <div className="f-info-title">Population:</div>
            <div className="f-info-value">{countryInfo.population}</div>
          </div>
          <div className="f-info-detail">
            <div className="f-info-title">Region</div>
            <div className="f-info-value">{countryInfo.region}</div>
          </div>
          <div className="f-info-detail">
            <div className="f-info-title">Capital</div>
            <div className="f-info-value">{countryInfo.capital}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flag;
