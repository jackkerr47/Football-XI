import { PlayerLocation } from '../utils/interfaces';
import '../main/Main.css';
import './Player.css';

type PlayerProps = {
  location: PlayerLocation;
};

function Player({ location }: PlayerProps) {
  return (
    <div className="player" style={{ left: location.left, top: location.top }}>
      Player name
    </div>
  );
}

export default Player;