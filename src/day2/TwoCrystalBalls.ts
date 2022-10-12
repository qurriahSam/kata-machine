export default function two_crystal_balls(breaks: boolean[]): number {
    const leap = Math.floor(Math.sqrt(breaks.length));

    let i = leap;
    for (; i < breaks.length; i += leap) {
        if (breaks[i]) {
            break;
        }
    }

    i -= leap;

    for (let j = 0; j < leap && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
