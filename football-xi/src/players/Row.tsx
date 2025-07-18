import Player from "./Player.tsx";

interface RowProps {
    numberOfPlayers: number;
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

function Row({ top, numberOfPlayers }: RowProps) {
      return (
        <div className="row">
            {Array.from({ length: numberOfPlayers }, (_, i) => (
                <Player location={{ left: calculateLeft(i, numberOfPlayers), top: top }} />
            ))}
        </div>
    );
}

export default Row;