import React from "react";
import GameState from "./GameState";
const ResetButton = ({ gameState, OnRest }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <div onClick={OnRest} className="flex justify-center items-center">
      <button className="py-4 px-8 border-transparent border-2 text-2xl bg-emerald-800 text-white rounded-xl hover:bg-emerald-800/50 transition-colors hover:border-2 hover:border-emerald-700 ">
        Reset Game
      </button>
    </div>
  );
};

export default ResetButton;
