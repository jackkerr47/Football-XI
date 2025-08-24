import './EditPlayerModal.css';

import { clubLogos, getClubByCountry } from '../../utils/logo-utils.ts';
import {
    getContinents,
    getCountriesByContinent
} from '../../utils/country-utils.ts';

import HierarchicalDropdown from './HierarchicalDropdown.tsx';
import { PlayerModel } from '../../utils/interfaces';
import React from 'react';

interface ModalRowProps {
    initialValue: string;
    field: keyof PlayerModel;
    label: string;
    onChange: (field: keyof PlayerModel, value: string) => void;
}

function getData(field: keyof PlayerModel) {
    if (field === 'country') {
        return (() => {
            const continents = getContinents();
            const data: { [key: string]: string[] } = {};
            continents.forEach((continent) => {
                data[continent] = getCountriesByContinent(continent);
            });
            return data;
        })();
    } else if (field === 'club') {
        return (() => {
            const countries = Object.keys(clubLogos);
            const data: { [key: string]: string[] } = {};
            countries.forEach((country) => {
                data[country] = getClubByCountry(country);
            });
            return data;
        })();
    }
    return {};
}

function ModalRow({ initialValue, field, label, onChange }: ModalRowProps) {
    return (
        <div className="modal-row">
            <label>
                <span className="modal-row-label">{`${label}:`}</span>
                {field === 'country' || field === 'club' ? (
                    <HierarchicalDropdown
                        key={field}
                        value={initialValue}
                        onChange={(value) => onChange(field, value)}
                        data={getData(field)}
                        placeholder={`select a ${field.toLowerCase()}`}
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
