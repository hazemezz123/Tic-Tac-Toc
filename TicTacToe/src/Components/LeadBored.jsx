import React from "react";

const LeadBored = ({ PlayersWins }) => {
  return (
    <table className="p-10  w-full text-xl mt-5 relative ">
      <thead className="p-4 text-center divide-x-2">
        <th>Player_X</th>
        <th className="flex justify-center items-center">Draws</th>
        <th>Player_O</th>
      </thead>
      <tbody className="p-4 text-center ">
        <td>{PlayersWins.Player_X}</td>
        <td>{PlayersWins.Draws}</td>
        <td>{PlayersWins.Player_O}</td>
      </tbody>
    </table>
  );
};

export default LeadBored;
