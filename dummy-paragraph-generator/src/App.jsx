import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap";
import text from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  const [textArray, setTextArray] = useState([]);
  function handleChange(e) {
    e.preventDefault();

    setCount(e.target.value);
  }
  function handleSubmit() {
    console.log(textArray);
    let amount = count;
    if (count <= 0) {
      amount = 1;
    } else if (count >= 8) {
      amount = 8;
    }
    setTextArray(text.slice(0, amount));
  }

  return (
    <>
      <h1>Paragraph Generator</h1>
      <div className="card">
        <label htmlFor="numberOfParagraphs">Number of paragraphs </label>
        <input
          id="numberOfParagraphs"
          type="number"
          onChange={handleChange}
          value={count}
        ></input>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Generate
        </button>
        <article>
          {textArray.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </article>
      </div>
    </>
  );
}

export default App;
