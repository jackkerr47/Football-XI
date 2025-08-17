import './Main.css';

import { PlayerModel, SquadModel } from '../utils/interfaces.ts';

import React from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import Squad from '../squad/Squad.tsx';
import { allowedFormations } from '../utils/squad-utils.ts';
import { positionSelector } from '../utils/position-selectors.ts';
import { useState } from 'react';

function initialiseSquad(formation: string): SquadModel {
    const formationArray = [1, ...formation.split('-').map(Number)];
    const players: PlayerModel[] = [];

    for (let i = 0; i < formationArray.length; i++) {
        for (let j = 0; j < formationArray[i]; j++) {
            players.push({
                id: players.length + 1,
                name: '',
                position: positionSelector(
                    i + 1,
                    j + 1,
                    formationArray.length,
                    formationArray[i]
                ),
                club: '',
                country: '',
                rowNumber: i + 1,
                rowIndex: j + 1
            });
        }
    }

    return { players };
}

function Main() {
    const [formation, setFormation] = useState(allowedFormations[0]);
    const [squad, setSquad] = useState<SquadModel>(initialiseSquad(formation));

    const onFormationChange = (value: string) => {
        setFormation(value);
        setSquad(initialiseSquad(value));
    };

    return (
        <div className="Main">
            <Sidebar onFormationChange={onFormationChange} />
            <Squad formation={formation} squad={squad} setSquad={setSquad} />
        </div>
    );
}

export default Main;
