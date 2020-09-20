export type GamePlatForm = 'PC'|'XBOX'|'PLAYSTATION';

export type Game = {
    id: number;
    title: string;
    platform: GamePlatForm;
    label: string;
    value: number;
}