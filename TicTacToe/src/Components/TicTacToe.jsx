import Board from "./board.jsx";
import { useState, useEffect } from "react";
import GameOver from "./GameOver.jsx";
import GameState from "./GameState.js";
import ResetButton from "./ResetButton.jsx";
import LeadBored from "./LeadBored.jsx";
import GameOverSound from "../sounds/GameOver.wav";
import ClickSound from "../sounds/clickSound.wav";

const gameOverSound = new Audio(GameOverSound);
gameOverSound.volume = 0.2;
const clickSound = new Audio(ClickSound);
clickSound.volume = 0.5;

const Player_x = "X";
const Player_o = "O";

const WinningCombinations = [
  // Rows
  { combo: [0, 1, 2], StrikeClass: "strike-row-1" },
  { combo: [3, 4, 5], StrikeClass: "strike-row-2" },
  { combo: [6, 7, 8], StrikeClass: "strike-row-3" },
  // Columns
  { combo: [0, 3, 6], StrikeClass: "strike-column-1" },
  { combo: [1, 4, 7], StrikeClass: "strike-column-2" },
  { combo: [2, 5, 8], StrikeClass: "strike-column-3" },
  // Diagonals
  { combo: [0, 4, 8], StrikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], StrikeClass: "strike-diagonal-2" },
];
function CheckWinner(Tiles, setStrikeClass, setGameState, setPlayerWins) {
  for (const { combo, StrikeClass } of WinningCombinations) {
    const TilesValue1 = Tiles[combo[0]];
    const TilesValue2 = Tiles[combo[1]];
    const TilesValue3 = Tiles[combo[2]];
    if (
      TilesValue1 !== null &&
      TilesValue1 === TilesValue2 &&
      TilesValue1 === TilesValue3
    ) {
      setStrikeClass(StrikeClass);
      if (TilesValue1 === Player_x) {
        setGameState(GameState.PlayerXWins);
        setPlayerWins((prevData) => ({
          ...prevData,
          Player_X: prevData.Player_X + 1,
        }));
      } else {
        setGameState(GameState.PlayerYWins);
        setPlayerWins((prevData) => ({
          ...prevData,
          Player_O: prevData.Player_O + 1,
        }));
      }
      return;
    }
  }
  const areTilesFilledIn = Tiles.every((Tile) => Tile !== null);
  if (areTilesFilledIn) {
    setGameState(GameState.Draw);
    setPlayerWins((prevData) => ({
      ...prevData,
      Draws: prevData.Draws + 1,
    }));
  }
}
const TicTacToe = () => {
  const [Tiles, setTiles] = useState(Array(9).fill(null));
  const [PlayerTurn, setPlayerTurn] = useState(Player_x);
  const [StrikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [PlayersWins, setPlayerWins] = useState({
    Player_X: 0,
    Player_O: 0,
    Draws: 0,
  });

  const handelTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }
    if (Tiles[index] !== null) {
      return;
    }
    const newTiles = [...Tiles];
    newTiles[index] = PlayerTurn;
    setTiles(newTiles);
    if (PlayerTurn === Player_x) {
      setPlayerTurn(Player_o);
    } else {
      setPlayerTurn(Player_x);
    }
  };
  const handelResetButton = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(Player_x);
    setStrikeClass(null);
  };
  useEffect(() => {
    CheckWinner(Tiles, setStrikeClass, setGameState, setPlayerWins);
  }, [Tiles]);
  useEffect(() => {
    if (Tiles.some((Tile) => Tile !== null)) {
      clickSound.play();
    }
  }, [Tiles]);
  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);
  return (
    <div>
      <h1>
        Tic <span className=""> Tac</span> <span className="">Toe</span>
      </h1>
      <Board
        PlayerTurn={PlayerTurn}
        Tiles={Tiles}
        onTileClick={handelTileClick}
        StrikeClass={StrikeClass}
      />
      <GameOver gameState={gameState} />
      <ResetButton gameState={gameState} OnRest={handelResetButton} />
      <LeadBored PlayersWins={PlayersWins} />
    </div>
  );
};

export default TicTacToe;
