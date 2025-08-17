export function positionSelector(
    rowNumber: number,
    rowIndex: number,
    numberOfRows: number,
    maxRowIndex: number
): string {
    switch (rowNumber) {
        case 1:
            return 'Goalkeeper';
        case 2:
            return defenderSelector(rowIndex, maxRowIndex);
        case 3:
            return midfielderSelector(rowIndex, numberOfRows, maxRowIndex);
        case 4:
            if (numberOfRows > 4) {
                return AdvancedMidfielderSelector(rowIndex, maxRowIndex);
            } else {
                return ForwardSelector(rowIndex, maxRowIndex);
            }
        case 5:
            return ForwardSelector(rowIndex, maxRowIndex);
        default:
            throw new Error('Invalid row number');
    }
}

function defenderSelector(rowIndex: number, maxRowIndex: number): string {
    switch (rowIndex) {
        case 1:
            if (maxRowIndex > 3) {
                return 'Left Back';
            } else {
                return 'Centre Back';
            }
        case 2:
            return 'Centre Back';
        case 3:
            return 'Centre Back';
        case 4:
            if (maxRowIndex > 4) {
                return 'Centre Back';
            } else {
                return 'Right Back';
            }
        case 5:
            return 'Right Back';
        default:
            throw new Error('Invalid row index');
    }
}

function midfielderSelector(
    rowIndex: number,
    numberOfRows: number,
    maxRowIndex: number
): string {
    if (numberOfRows > 4) {
        // E.g. 4-2-3-1
        switch (rowIndex) {
            case 1:
                if (maxRowIndex > 3) {
                    return 'Left Midfielder';
                } else {
                    return 'Defensive Midfielder';
                }
            case 2:
                return 'Defensive Midfielder';
            case 3:
                return 'Defensive Midfielder';
            case 4:
                return 'Right Midfielder';
            default:
                throw new Error('Invalid row index');
        }
    } else {
        switch (rowIndex) {
            case 1:
                if (maxRowIndex > 3) {
                    return 'Left Midfielder';
                } else {
                    return 'Central Midfielder';
                }
            case 2:
                return 'Central Midfielder';
            case 3:
                return 'Central Midfielder';
            case 4:
                if (maxRowIndex > 4) {
                    return 'Central Midfielder';
                } else {
                    return 'Right Midfielder';
                }
            case 5:
                return 'Right Midfielder';
            default:
                throw new Error('Invalid row index');
        }
    }
}

function AdvancedMidfielderSelector(
    rowIndex: number,
    maxRowIndex: number
): string {
    switch (rowIndex) {
        case 1:
            if (maxRowIndex > 2) {
                return 'Left Winger';
            } else {
                return 'Attacking Midfielder';
            }
        case 2:
            return 'Attacking Midfielder';
        case 3:
            if (maxRowIndex > 3) {
                return 'Attacking Midfielder';
            } else {
                return 'Right Winger';
            }
        case 4:
            return 'Right Winger';
        default:
            throw new Error('Invalid row index');
    }
}

function ForwardSelector(rowIndex: number, maxRowIndex: number): string {
    switch (rowIndex) {
        case 1:
            if (maxRowIndex > 2) {
                return 'Left Winger';
            } else {
                return 'Striker';
            }
        case 2:
            return 'Striker';
        case 3:
            if (maxRowIndex > 3) {
                return 'Striker';
            } else {
                return 'Right Winger';
            }
        case 4:
            return 'Right Winger';
        default:
            throw new Error('Invalid row index');
    }
}
