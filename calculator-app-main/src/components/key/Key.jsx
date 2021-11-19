import "./key.css";

const Key = ({ value = 0, type, setKeyPressed }) => {

    const keyPressed = () => {
        setKeyPressed(value);
    }
  return (
    <div className="key-main">
      <div className="key-wrapper">
        <div className="key-surface">
          <div className="key-value" onClick={keyPressed}>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Key;
