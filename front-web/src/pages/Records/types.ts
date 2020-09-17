export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;   
}

export Recorditem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';               