let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function makeMove(cell) {
  const index = Array.from(cell.parentElement.children).indexOf(cell);

  if (gameBoard[index] === "" && !isGameFinished()) {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkForWin()) {
      document.getElementById("status").textContent = `برد ${currentPlayer}`;
    } else if (isBoardFull()) {
      document.getElementById("status").textContent = "مساوی شدید";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").textContent = `${currentPlayer} نوبت`;
    }
  }
}

function checkForWin() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
}

function isBoardFull() {
  return gameBoard.every((cell) => cell !== "");
}

function isGameFinished() {
  return checkForWin() || isBoardFull();
}

function resetGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });

  document.getElementById("status").textContent = "X شروع کن";
}

// resetGame(); // Initialize the game
