export interface Stage {
    platforms: {
        x: number;
        y: number;
        w: number;
        h: number;
    }[],
    layers: {
        url: string;
        parallax: number;
    }[]
}