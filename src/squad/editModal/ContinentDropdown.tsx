import './ContinentDropdown.css';

import React, { useEffect, useRef, useState } from 'react';
import {
    getContinents,
    getCountriesByContinent
} from '../../utils/country-utils.ts';

interface ContinentDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

export const ContinentDropdown: React.FC<ContinentDropdownProps> = ({
    value,
    onChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredContinent, setHoveredContinent] = useState<string | null>(
        null
    );
    const continents = getContinents();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setHoveredContinent(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleContinentHover = (continent: string) => {
        setHoveredContinent(continent);
    };

    const handleCountrySelect = (country: string) => {
        onChange(country);
        setIsOpen(false);
        setHoveredContinent(null);
    };

    const getDisplayValue = () => {
        return value || 'Select a country';
    };

    return (
        <div className="hierarchical-dropdown" ref={dropdownRef}>
            <div
                className="dropdown-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="dropdown-value">{getDisplayValue()}</span>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
                    ▼
                </span>
            </div>

            {isOpen && (
                <div className="dropdown-menu">
                    <div className="continents-list">
                        {continents.map((continent) => (
                            <div
                                key={continent}
                                className="continent-item"
                                onMouseEnter={() =>
                                    handleContinentHover(continent)
                                }
                            >
                                <span className="continent-name">
                                    {continent}
                                </span>
                                <span className="continent-arrow">▶</span>
                            </div>
                        ))}
                    </div>

                    {hoveredContinent && (
                        <div className="countries-submenu">
                            <div className="countries-submenu-header">
                                {hoveredContinent}
                            </div>
                            {getCountriesByContinent(hoveredContinent).map(
                                (country) => (
                                    <div
                                        key={country}
                                        className="country-item"
                                        onClick={() =>
                                            handleCountrySelect(country)
                                        }
                                    >
                                        {country}
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ContinentDropdown;
