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
    const [dropdownPosition, setDropdownPosition] = useState<'below' | 'above'>(
        'below'
    );
    const continents = getContinents();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

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

        const handleResize = () => {
            if (isOpen) {
                calculateDropdownPosition();
            }
        };

        const handleScroll = () => {
            if (isOpen) {
                calculateDropdownPosition();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [isOpen]);

    const calculateDropdownPosition = () => {
        if (!triggerRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const dropdownHeight = 400; // Approximate height of dropdown
        const buffer = 20; // Buffer space from viewport edges

        const spaceBelow = viewportHeight - triggerRect.bottom - buffer;
        const spaceAbove = triggerRect.top - buffer;

        // If there's not enough space below but enough above, position above
        if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
            setDropdownPosition('above');
        } else {
            setDropdownPosition('below');
        }
    };

    const handleDropdownToggle = () => {
        if (!isOpen) {
            calculateDropdownPosition();
        }
        setIsOpen(!isOpen);
    };

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
                ref={triggerRef}
                onClick={handleDropdownToggle}
            >
                <span className="dropdown-value">{getDisplayValue()}</span>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
                    ▼
                </span>
            </div>

            {isOpen && (
                <div
                    className={`dropdown-menu ${
                        dropdownPosition === 'above' ? 'dropdown-above' : ''
                    }`}
                >
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
