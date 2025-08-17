export interface PlayerModel {
    id: number;
    name: string;
    position: string;
    club: string;
    country: string;
    rowNumber: number; // Which row the player is in
    rowIndex: number; // Which position in the row the player is in
}

export interface SquadModel {
    players: PlayerModel[];
}
