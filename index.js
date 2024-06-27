let container = document.querySelector(".container");

function makeRow(numSquares = 16) {
  // Given a number of squares (default 16) creates a row of those squares
  const row = document.createElement("div");
  row.className = "row";
  for (let i = 0; i < numSquares; i++) {
    let square = document.createElement("p");
    square.className = "square";
    row.appendChild(square);
  }
  return row;
}

// Create an n x n matrix (square), where n is the number of rows/columns
const n = 100;
for (let i = 0; i < n; i++) {
  const row = makeRow(n);
  container.appendChild(row);
}

function changeColor(event){
  if (this.style.backgroundColor === "brown") {
    this.style.backgroundColor = "grey";
  } else {
    this.style["background-color"] = "brown";
  }
}

// Add an event listener that listens onclick of each square
const allSquares = Array.from(document.querySelectorAll(".square"));
for (let square of allSquares) {
  square.addEventListener("mouseover", changeColor);
  square.addEventListener("touchstart", changeColor);
  square.addEventListener("touchmove", changeColor);
  square.addEventListener("touchend", changeColor);
}

// Reset button
const btn = document.createElement("button");
btn.className = "btn";
btn.innerHTML = "reset";
btn.style.width = "500px";
btn.addEventListener("click", () => {
  allSquares.forEach((square) => {
    square.style.backgroundColor = "grey";
  });
});

container.appendChild(btn);
