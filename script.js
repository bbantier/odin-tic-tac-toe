const gameboard = (function () {
  const gameboard = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  function placeMarker(marker, position) {
    gameboard[position - 1] = marker;
  }

  function getGameboardState() {
    console.log(gameboard);
  }

  return { placeMarker, getGameboardState };
})();

const createPlayer = function (playerNumber) {
  const playerName = `Player ${playerNumber}`;
  const playerMarker = playerNumber === 1 ? "x" : "o";

  return { playerName, playerMarker };
};

const game = (function () {
  const playerOne = createPlayer(1);
  const playerTwo = createPlayer(2);
})();