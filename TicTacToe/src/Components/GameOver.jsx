import React from "react";
import GameState from "./GameState";
const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return (
        <h1 className="text-center animate-pulse  text-3xl pb-4 text-green-600  border-b-slate-50 border-b-2">
          in Progress...
        </h1>
      );
    case GameState.Draw:
      return (
        <h1 className="text-center  text-3xl pb-4  border-b-slate-50 border-b-2">
          Draw !
        </h1>
      );
    case GameState.PlayerXWins:
      return (
        <h1 className="text-center  text-3xl pb-4  border-b-slate-50 border-b-2">
          The Winner is : <span>X</span>{" "}
        </h1>
      );
    case GameState.PlayerYWins:
      return (
        <h1 className="text-center  text-3xl pb-4  border-b-slate-50 border-b-2">
          The Winner is : <span>O</span>{" "}
        </h1>
      );
  }
};

//  return (
//    <h1 className="text-center  text-3xl pb-4  border-b-slate-50 border-b-2">
//      The Winner is : <span>X</span>{" "}
//    </h1>
//  );
export default GameOver;
