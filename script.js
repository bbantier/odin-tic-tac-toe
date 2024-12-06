const gameboard = (function () {
  const gameboard = [
    // Explore the possiblity to use only one array
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  function placeMarker(marker, x, y) {
    gameboard[x - 1][y - 1] = marker;
  }

  return { gameboard, placeMarker };
})();

const createPlayer = function (playerNumber) {
  const playerName = prompt();
  const playerMarker = playerNumber === 1 ? "x" : "o";
  return { playerName, playerMarker };
};

const playGame = function () {
  const playerOne = createPlayer(1);
  const playerTwo = createPlayer(2);

  function playTurn(x, y) {
    let turn = 1;
    const currentPlayer = turn % 2 === 0 ? playerOne : playerTwo;
    x = prompt();
    y = prompt();
    gameboard.placeMarker(currentPlayer.playerMarker, x, y);
    turn++;
  }
};