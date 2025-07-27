import Player from "./Player.tsx";
import { PlayerModel } from "../utils/interfaces.ts";

interface RowProps {
    players: PlayerModel[];
    numberOfRows: number;
    top: string;
}

function calculateLeft(index: number, numberOfPlayers: number): string {
    const playerWidth = 7.5;

    if (numberOfPlayers === 2) {
        // Calculate as if there were 4 players, and pick the middle two positions (1 and 2)
        const virtualNumber = 4;
        const totalSpacing = 100 - (playerWidth * virtualNumber);
        const gap = totalSpacing / (virtualNumber + 1);
        const virtualIndex = index + 1; // index 0 -> 1, index 1 -> 2
        const left = gap * (virtualIndex + 1) + playerWidth * virtualIndex;
        return `${left}%`;
    }

    // Default layout for other row sizes
    const totalSpacing = 100 - (playerWidth * numberOfPlayers);
    const gap = totalSpacing / (numberOfPlayers + 1);
    const left = gap * (index + 1) + playerWidth * index;
    return `${left}%`;
}

function Row({ players, top, numberOfRows }: RowProps) {
    const width = numberOfRows  === 5 ? '6%' : '7.5%';
    const height = numberOfRows === 5 ? '12%' : '15%';

    return (
        <div>
            {Array.from({ length: players.length }, (_, i) => (
                <Player
                    player={players[i]}
                    key={i}
                    left={calculateLeft(i, players.length)}
                    top={top}
                    width={width}
                    height={height}
                />
            ))}
        </div>
    );
}

export default Row;