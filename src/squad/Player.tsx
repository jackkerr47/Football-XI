import '../main/Main.css';
import './Player.css';

import EditPlayerModal from './editModal/EditPlayerModal.tsx';
import { PlayerModel } from '../utils/interfaces';
import { useState } from 'react';

type PlayerProps = {
    player: PlayerModel;
    left: string;
    top: string;
    width: string;
    height: string;
    onPlayerChange: (updatedPlayer: PlayerModel) => void;
};

function Player({
    player,
    left,
    top,
    width,
    height,
    onPlayerChange
}: PlayerProps) {
    const [playerEditModalOpen, setPlayerEditModalOpen] = useState(false);

    return (
        <>
            <div
                className="player"
                style={{ left: left, top: top, width: width, height: height }}
                onClick={() => setPlayerEditModalOpen(true)}
            >
                Player name
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
