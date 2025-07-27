export interface PlayerModel {
    id: number;
    name: string;
    position: string;
    club: string;
    country: string;
    rowNumber: number;
}

export interface SquadModel {
    players: PlayerModel[];
}
