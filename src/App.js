import React, { useState } from "react";
import "./styles.css";

var heading = "Ijas";
var color = "red";

var emojiDb = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball"
};

// var array = ["milk", "bis"];

var dataBase = Object.keys(emojiDb);

export default function App() {
  var [data, setData] = useState();
  //processing...//
  function inputHandler(ijas) {
    var userSearch = ijas.target.value;
    var userInput = emojiDb[userSearch];
    setData(userInput);
  }

  function clickHandler(sadiq) {
    var userInput = emojiDb[sadiq];
    setData(userInput);
    console.log(sadiq, userInput);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: color }}>{heading}</span>
      </h1>
      <input onChange={inputHandler}></input>
      <h3>{data}</h3>
      <h3>Emojis</h3>
      {dataBase.map((sadiq) => {
        return (
          <span
            key={sadiq}
            style={{ cursor: "pointer" }}
            onClick={() => clickHandler(sadiq)}
          >
            {sadiq}
          </span>
        );
      })}
    </div>
  );
}
