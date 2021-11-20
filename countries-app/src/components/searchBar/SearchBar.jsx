import "./searchBar.css";

const SearchBar = ({ setFilter, setRegion }) => {
  const changeManage = (event) => {
    setFilter(event.target.value);
  };

  const handleRegion = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div className="s-main">
      <div className="s-wrapper">
        <div className="s-left">
          <input
            type="text"
            onChange={changeManage}
            className="s-input"
            placeholder="Search for a country..."
          />
        </div>
        <div className="s-right">
          <select name="region" id="region" className="s-select" onChange={handleRegion}>
            <option hidden selected>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
