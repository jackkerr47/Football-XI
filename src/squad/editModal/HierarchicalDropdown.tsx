import './HierarchicalDropdown.css';

import React, { useEffect, useRef, useState } from 'react';

interface HierarchicalData {
    [key: string]: string[];
}

interface HierarchicalDropdownProps {
    value: string;
    onChange: (value: string) => void;
    data: HierarchicalData;
    placeholder?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
}

export const HierarchicalDropdown: React.FC<HierarchicalDropdownProps> = ({
    value,
    onChange,
    data,
    placeholder = 'Select an option',
    primaryLabel = 'Primary',
    secondaryLabel = 'Secondary'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPrimary, setHoveredPrimary] = useState<string | null>(null);
    const [dropdownPosition, setDropdownPosition] = useState<'below' | 'above'>(
        'below'
    );

    const primaryOptions = Object.keys(data);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setHoveredPrimary(null);
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

    const handlePrimaryHover = (primaryOption: string) => {
        setHoveredPrimary(primaryOption);
    };

    const handleSecondarySelect = (secondaryOption: string) => {
        onChange(secondaryOption);
        setIsOpen(false);
        setHoveredPrimary(null);
    };

    const getDisplayValue = () => {
        return value || placeholder;
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
                    <div className="primary-list">
                        {primaryOptions.map((primaryOption) => (
                            <div
                                key={primaryOption}
                                className="primary-item"
                                onMouseEnter={() =>
                                    handlePrimaryHover(primaryOption)
                                }
                            >
                                <span className="primary-name">
                                    {primaryOption}
                                </span>
                                <span className="primary-arrow">▶</span>
                            </div>
                        ))}
                    </div>

                    {hoveredPrimary && (
                        <div className="secondary-submenu">
                            <div className="secondary-submenu-header">
                                {hoveredPrimary}
                            </div>
                            {data[hoveredPrimary].map((secondaryOption) => (
                                <div
                                    key={secondaryOption}
                                    className="secondary-item"
                                    onClick={() =>
                                        handleSecondarySelect(secondaryOption)
                                    }
                                >
                                    {secondaryOption}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HierarchicalDropdown;
