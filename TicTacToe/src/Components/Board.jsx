import Tile from "./Tile";
import Strike from "./Strike";
const board = ({ Tiles, onTileClick, PlayerTurn, StrikeClass }) => {
  return (
    <div className="Board">
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(0)}
        value={Tiles[0]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(1)}
        value={Tiles[1]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(2)}
        value={Tiles[2]}
        className=" bottom-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(3)}
        value={Tiles[3]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(4)}
        value={Tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(5)}
        value={Tiles[5]}
        className=" bottom-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(6)}
        value={Tiles[6]}
        className="right-border "
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(7)}
        value={Tiles[7]}
        className="right-border"
      />
      <Tile
        PlayerTurn={PlayerTurn}
        onClick={() => onTileClick(8)}
        value={Tiles[8]}
      />
      <Strike StrikeClass={StrikeClass} />
    </div>
  );
};

export default board;
