import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleChange = () => {
    console.log("heelo");
  };
  return (
    <>
      <div className="main-container">
        <input
          readOnly
          value={value}
          className="input"
          placeholder="Enter a number"
          onChange={() => {
            handleChange();
          }}></input>
        <hr />
        <div className="btn-container">
          <button
            onClick={() => {
              setValue("c");
            }}>
            C
          </button>
          <button>0</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
