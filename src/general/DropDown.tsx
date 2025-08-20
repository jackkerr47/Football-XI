import '../main/Main.css';
import './DropDown.css';

import React from 'react';

interface DropDownProps {
    options: string[];
    onChange: (value: string) => void;
    label?: string;
}

function DropDown({ options, onChange, label }: DropDownProps) {
    return (
        <div className="dropDown">
            <select id="drop-down" onChange={(e) => onChange(e.target.value)}>
                {label && (
                    <option value="" disabled selected>
                        {label}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;
