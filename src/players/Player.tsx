import { PlayerDimensionsAndLocation } from '../utils/interfaces';
import '../main/Main.css';
import './Player.css';

type PlayerProps = {
  playerDimensionsandLocation: PlayerDimensionsAndLocation;
};

function Player({ playerDimensionsandLocation }: PlayerProps) {
  return (
    <div className="player" style={{ left: playerDimensionsandLocation.left, top: playerDimensionsandLocation.top, width: playerDimensionsandLocation.width, height: playerDimensionsandLocation.height }}>
      Player name
    </div>
  );
}

export default Player;