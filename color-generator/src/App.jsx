import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Values from "values.js";
import "bootstrap/dist/css/bootstrap.min.css";

console.log(Values);

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleClick = () => {
    setAlert(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div className="container-fluid">
      <h3>Color Generator</h3>
      <div>
        <label htmlFor="input">color </label>
        <input
          className={`${error ? "error" : null}`}
          id="input"
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        ></input>
        <button onClick={handleSubmit}>Generate</button>
      </div>
      <div className="container text-center">
        <div className="row row-cols-auto">
          {list.map((item, index) => {
            const r = item.rgb[0];
            const g = item.rgb[1];
            const b = item.rgb[2];
            let thisColor = rgbToHex(r, g, b);
            return (
              <div
                key={index}
                className="col"
                style={{ backgroundColor: thisColor }}
              >
                <h5>{item.weight}%</h5>
                <h5>{thisColor}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
