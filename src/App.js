import React, { useState } from "react";
import "./styles.css";

var heading = "Ijas";
var color = "red";
var likeCounter = 0; //input

var emojiDb = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball"
};

var dataBase = Object.keys(emojiDb);

export default function App() {
  var [like, setlike] = useState();
  var [data, setdata] = useState();

  function inputHandler(ijas) {
    console.log(ijas.target.value);
    var userInput = ijas.target.value;
    setdata(userInput);
  }
  function clickHandler() {
    likeCounter = likeCounter + 1; //proccessing
    console.log("Liked", likeCounter); //output
    setlike(likeCounter);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: color }}>{heading}</span>
      </h1>
      <input onChange={inputHandler}></input>
      <button onClick={clickHandler}>Like</button> {like}
      <div>{data}</div>
      <div>{dataBase}</div>
    </div>
  );
}
