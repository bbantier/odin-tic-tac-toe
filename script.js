const gameboard = (function () {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  function placeMarker(marker, position) {
    gameboard[position - 1] = marker;
  }

  function getGameboardState() {
    console.log(gameboard);
    return gameboard;
  }

  return { placeMarker, getGameboardState };
})();

const createPlayer = function (playerNumber) {
  const playerName = `Player ${playerNumber}`;
  const playerMarker = playerNumber === 1 ? "x" : "o";

  return { playerName, playerMarker };
};

const game = function () {
  const playerOne = createPlayer(1);
  const playerTwo = createPlayer(2);
  let currentPlayer = playerOne;

  function switchPlayer() {
    currentPlayer === playerOne ? playerTwo : playerOne;
  }

  function playTurn(position) {
    position = prompt();
    gameboard.placeMarker(currentPlayer.marker, position);
    evaluateGame(currentPlayer.marker);
  }

  function evaluateGame(marker) {
    gameboard.getGameboardState().forEach((cell, index, arr) => {
      if (index === 0 || index % 3 === 0) {
        if (
          cell === marker &&
          arr[index + 1] === marker &&
          arr[index + 2] === marker
        ) {
          console.log(currentPlayer.playerName + " wins!");
          return;
        } else {
          switchPlayer();
          playTurn();
        }
      }
    });
  }
};