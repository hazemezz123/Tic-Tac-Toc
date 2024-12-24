// eslint-disable-next-line react/prop-types
const Tile = ({ className, value, onClick, PlayerTurn }) => {
  let hoverClass = null;
  if (value == null && PlayerTurn !== null) {
    // eslint-disable-next-line react/prop-types
    hoverClass = ` ${PlayerTurn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onClick} className={`${className} Tile ${hoverClass} `}>
      {value}
    </div>
  );
};

export default Tile;
