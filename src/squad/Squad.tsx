import '../main/Main.css';

import { PlayerModel, SquadModel } from '../utils/interfaces.ts';

import { ReactElement } from 'react';
import Row from './Row.tsx';

interface SquadProps {
    formation: string;
    squad: SquadModel;
    setSquad: React.Dispatch<React.SetStateAction<SquadModel>>;
}

function createFormation(
    formation: string,
    squad: SquadModel,
    onPlayerChange: (updatedPlayer: PlayerModel) => void
): ReactElement[] {
    const rows = formation.split('-').map(Number);
    rows.push(1);

    const topDifference = rows.length === 5 ? 19.5 : 25;
    const startingPosition = rows.length === 5 ? 100 : 103;

    return rows
        .slice()
        .reverse()
        .map((_, idx) => {
            const rowIndex = rows.length - idx;
            const top = `${startingPosition - rowIndex * topDifference}%`;

            return (
                <Row
                    key={rowIndex}
                    players={squad.players.filter(
                        (player) => player.rowNumber === rowIndex
                    )}
                    top={top}
                    numberOfRows={rows.length}
                    onPlayerChange={onPlayerChange}
                />
            );
        });
}

function Squad({ formation, squad, setSquad }: SquadProps) {
    const onPlayerChange = (updatedPlayer: PlayerModel) => {
        setSquad((prevSquad) => ({
            players: prevSquad.players.map((p) =>
                p.id === updatedPlayer.id ? updatedPlayer : p
            )
        }));
    };

    return (
        <div className="squad">
            {createFormation(formation, squad, onPlayerChange)}
        </div>
    );
}

export default Squad;
