import '../main/Main.css';
import './Player.css';

import EditPlayerModal from './editModal/EditPlayerModal.tsx';
import { PlayerModel } from '../utils/interfaces';
import React from 'react';
import { getLogoPath } from '../utils/logo-utils.ts';
import { mapCountryToFlag } from '../utils/country-utils.ts';
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

    const flagFile = `images/flags/${mapCountryToFlag(player.country)}`;

    return (
        <>
            <div
                className={`player ${
                    playerIsComplete(player) ? 'completed' : ''
                }`}
                style={{ left: left, top: top, width: width, height: height }}
                onClick={() => setPlayerEditModalOpen(true)}
            >
                {playerIsComplete(player) ? (
                    <>
                        <div className="name">{player.name}</div>
                        <div className="position">{player.position}</div>
                        <div className="club">
                            <img
                                src={getLogoPath(player.club)}
                                alt={player.club}
                            />
                        </div>
                        <div className="country">
                            <img src={flagFile} alt={player.country} />
                        </div>
                    </>
                ) : (
                    <div className="clickToEdit">Click to Edit</div>
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
