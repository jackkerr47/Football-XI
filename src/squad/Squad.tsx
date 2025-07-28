import '../main/Main.css';

import { PlayerModel, SquadModel } from '../utils/interfaces.ts';
import { ReactElement, useState } from 'react';

import DropDown from '../general/DropDown.tsx';
import Row from './Row.tsx';
import { allowedFormations } from '../utils/squad-utils.ts';

function createFormation(
    formation: string,
    squad: SquadModel,
    onPlayerChange: (updatedPlayer: PlayerModel) => void
): ReactElement[] {
    const rows = formation.split('-').map(Number);
    rows.push(1);

    const topDifference = rows.length === 5 ? 17 : 21;

    return rows
        .slice()
        .reverse()
        .map((_, idx) => {
            const rowIndex = rows.length - idx;
            const top = `${100 - rowIndex * topDifference}%`;

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

function initialiseSquad(formation: string): SquadModel {
    const formationArray = [1, ...formation.split('-').map(Number)];
    const players: PlayerModel[] = [];

    for (let i = 0; i < formationArray.length; i++) {
        for (let j = 0; j < formationArray[i]; j++) {
            players.push({
                id: players.length + 1,
                name: '',
                position: '',
                club: '',
                country: '',
                rowNumber: i + 1
            });
        }
    }

    return { players };
}

function Squad() {
    const [formation, setFormation] = useState(allowedFormations[0]);
    const [squad, setSquad] = useState<SquadModel>(initialiseSquad(formation));

    const onFormationChange = (value: string) => {
        setFormation(value);
        setSquad(initialiseSquad(value));
    };

    const onPlayerChange = (updatedPlayer: PlayerModel) => {
        setSquad((prevSquad) => ({
            players: prevSquad.players.map((p) =>
                p.id === updatedPlayer.id ? updatedPlayer : p
            )
        }));
    };

    return (
        <div className="squad">
            <DropDown
                options={allowedFormations}
                onChange={onFormationChange}
                label="Choose a formation"
            />
            {createFormation(formation, squad, onPlayerChange)}
        </div>
    );
}

export default Squad;
