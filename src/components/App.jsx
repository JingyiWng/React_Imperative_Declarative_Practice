import React from "react";

// ---------- 1: Imperative Example ---------- :
// function strike() {
//   document.getElementById('root').style.textDecoration = 'line-through';
// }
// function unstrike() {
//   document.getElementById('root').style.textDecoration = null;
// }

// function App() {
//   return (
//     <div>
//       <p>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unstrike}>Change back</button>
//     </div>
//   );
// }

// ---------- 2: Declarative Example ---------- :
// var isDone = true;

// function App() {
//   return (
//     <div>
//       <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//     </div>
//   );
// }

// ---------- 3: WRONG Declarative Example ---------- :
var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}
// The code block above won't work, because the elements inside <div>
// (lines 45-49)are being rendered, and they are not changeable. They
// have to be re-rendered onto the screen in order for the changes in their
// properties (e.g. style properties) to be seen.
export default App;

// import React from "react";

// var isDone = false;

// function strike() {
//   isDone = true;
// }

// function unStrike() {
//   isDone = false;
// }

// function App() {
//   return (
//     <div>
//       <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back</button>
//     </div>
//   );
// }

// export default App;
