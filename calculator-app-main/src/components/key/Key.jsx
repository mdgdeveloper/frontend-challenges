import "./key.css";

const Key = ({ value = 0, type, setKeyPressed }) => {
  const keySurfaceStyle = {
    number: "key-surface-number",
    del: "key-surface-del",
    reset: "key-surface-del",
    equal: "key-surface-equal",
  };
  const keyWrapperStyle = {
    number: "key-wrapper-number",
    del: "key-wrapper-del",
    reset: "key-wrapper-del",
    equal: "key-wrapper-equal",
  };
  const keyValueStyle = {
    number: "key-value-number",
    del: "key-value-del",
    reset: "key-value-del",
    equal: "key-value-equal",
  };

  const keyPressed = () => {
    if (type === "number") setKeyPressed(value);
    if (type === "reset" || type === "del") setKeyPressed(true);
    if (type === "add") setKeyPressed("add");
    if (type === "sub") setKeyPressed("sub");
    if (type === "mult") setKeyPressed("mult");
    if (type === "div") setKeyPressed("div");
    if (type === "equal") setKeyPressed("equal")
  };

  return (
    <div className="key-main" onClick={keyPressed}>
      <div className={`key-wrapper ${keyWrapperStyle[type]}`}>
        <div className={`key-surface ${keySurfaceStyle[type]}`}>
          <div className={`key-value ${keyValueStyle[type]}`}>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Key;
