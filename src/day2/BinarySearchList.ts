export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length;
    let lo = 0;
    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        if (needle === haystack[m]) {
            return true;
        } else if (haystack[m] > needle) {
            hi = m;
        } else if (haystack[m] < needle) {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}
