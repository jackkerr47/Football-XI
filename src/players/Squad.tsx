import { ReactElement, useState } from 'react';
import '../main/Main.css';
import Row from './Row.tsx';
import DropDown from '../general/DropDown.tsx';
import { allowedFormations } from '../utils/squad-utils.ts';

function createFormation(formation: string) {
  const rows = formation.split('-').reverse().map(Number); // Split formation into rows and reverse so they can be rendered top to bottom
  rows.push(1); // Goalkeeper row

  const topDifference = rows.length === 5 ? 16.5 : 20;
  const squadRows: ReactElement[] = [];
  for (let i = 0; i <= rows.length; i++) {
    squadRows.push(
      <Row key={i} top={`${(i + 1) * topDifference}%`} numberOfPlayers={rows[i]} numberOfRows={rows.length} />
    );
  }

  return squadRows;
}

function Squad() {
  const [formation, setFormation] = useState(allowedFormations[0]);

  const onFormationChange = (value: string) => {
    setFormation(value);
  }

  return (
    <div className="squad">
      <DropDown options={allowedFormations} onChange={onFormationChange} label='Choose a formation'/>
      {createFormation(formation)}
    </div>
  )
}

export default Squad;
