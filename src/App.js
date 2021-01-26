import "./styles.css";

var heading = "Ijas";
var color = "red";
var likeCounter = 0; //input

export default function App() {
  function clickHandler() {
    likeCounter = likeCounter + 1; //proccessing
    console.log("Liked", likeCounter); //output
  }
  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: color }}>{heading}</span>
      </h1>
      <button onClick={clickHandler}>Like</button>
    </div>
  );
}
