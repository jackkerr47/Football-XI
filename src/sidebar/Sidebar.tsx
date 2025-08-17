import '../main/Main.css';

import DropDown from '../general/DropDown.tsx';
import React from 'react';
import Title from './Title.tsx';
import { allowedFormations } from '../utils/squad-utils.ts';

interface SidebarProps {
    onFormationChange: (value: string) => void;
}

function Sidebar({ onFormationChange }: SidebarProps) {
    return (
        <div className="Sidebar">
            <Title />
            <DropDown
                options={allowedFormations}
                onChange={onFormationChange}
                label="Choose a formation"
            />
        </div>
    );
}

export default Sidebar;
