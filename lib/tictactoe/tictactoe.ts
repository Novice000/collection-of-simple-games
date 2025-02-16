export function checkDiagonal(state: string[][]): boolean {
    const N = state.length;
    const first = state[0][0];
    if (first === "") return false; // Check for empty first cell
    for (let i = 0; i < N; i++) {
        if (state[i][i] !== first) {
            return false;
        }
    }
    return true;
}

export function checkReverseDiagonal(state: string[][]): boolean {
    const N = state.length;
    const first = state[0][N - 1];
    if (first === "") return false; // Check for empty first cell
    for (let i = 0; i < N; i++) {
        if (state[i][N - 1 - i] !== first) {
            return false;
        }
    }
    return true;
}

export function checkRow(state: string[][]): boolean {
    const N = state.length;
    for (let i = 0; i < N; i++) {
        const first = state[i][0];
        if (first === "") continue; // Skip empty rows
        let allSame = true;
        for (let j = 0; j < N; j++) {
            if (state[i][j] !== first) {
                allSame = false;
                break;
            }
        }
        if (allSame) return true; // Return true if any row has all same
    }
    return false;
}

export function checkColumn(state: string[][]): boolean {
    const N = state.length;
    for (let i = 0; i < N; i++) {
        const first = state[0][i];
        if (first === "") continue; // Skip empty columns
        let allSame = true;
        for (let j = 0; j < N; j++) {
            if (state[j][i] !== first) {
                allSame = false;
                break;
            }
        }
        if (allSame) return true; // Return true if any column has all same
    }
    return false;
}

export type difficulty = {
    N: number,
    difficulty: string,
}
