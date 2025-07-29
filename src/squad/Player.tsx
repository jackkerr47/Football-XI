import '../main/Main.css';
import './Player.css';

import EditPlayerModal from './editModal/EditPlayerModal.tsx';
import { PlayerModel } from '../utils/interfaces';
import { mapCountryToFlag } from '../utils/squad-utils.ts';
import { useState } from 'react';

type PlayerProps = {
    player: PlayerModel;
    left: string;
    top: string;
    width: string;
    height: string;
    onPlayerChange: (updatedPlayer: PlayerModel) => void;
};

function playerIsComplete(player: PlayerModel): boolean {
    return (
        !!player.name && !!player.position && !!player.club && !!player.country
    );
}

function Player({
    player,
    left,
    top,
    width,
    height,
    onPlayerChange
}: PlayerProps) {
    const [playerEditModalOpen, setPlayerEditModalOpen] = useState(false);

    const file = `images/flags/${mapCountryToFlag(player.country)}`;

    return (
        <>
            <div
                className="player"
                style={{ left: left, top: top, width: width, height: height }}
                onClick={() => setPlayerEditModalOpen(true)}
            >
                {playerIsComplete(player) ? (
                    <>
                        <div className="name">{player.name}</div>
                        <div className="position">{player.position}</div>
                        <div className="club">
                            <img
                                src="images/crests/liverpool.png"
                                alt="Liverpool FC"
                            />
                        </div>
                        <div className="country">
                            <img src={file} alt={player.country} />
                        </div>
                    </>
                ) : (
                    'Player name'
                )}
            </div>
            {playerEditModalOpen && (
                <EditPlayerModal
                    player={player}
                    onModalClose={() => setPlayerEditModalOpen(false)}
                    onPlayerChange={onPlayerChange}
                />
            )}
        </>
    );
}

export default Player;
