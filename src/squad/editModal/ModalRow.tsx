import './EditPlayerModal.css';

import ContinentDropdown from './ContinentDropdown.tsx';
import { PlayerModel } from '../../utils/interfaces';
import React from 'react';

interface ModalRowProps {
    initialValue: string;
    field: keyof PlayerModel;
    label: string;
    onChange: (field: keyof PlayerModel, value: string) => void;
    continentDropdown?: boolean;
}

function ModalRow({
    initialValue,
    field,
    label,
    onChange,
    continentDropdown = false
}: ModalRowProps) {
    return (
        <div className="modal-row">
            <label>
                {`${label}:`}
                {continentDropdown ? (
                    <ContinentDropdown
                        value={initialValue}
                        onChange={(value) => onChange(field, value)}
                    />
                ) : (
                    <input
                        type="text"
                        defaultValue={initialValue}
                        onChange={(e) => onChange(field, e.target.value)}
                        disabled={field === 'position'}
                    />
                )}
            </label>
        </div>
    );
}

export default ModalRow;
