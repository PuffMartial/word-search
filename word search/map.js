
var exist = function (board, word) {
    const numrows = board.length;
    const nulCols = board[0].length;
    function dfs(row, col, i) {
        if (i === word.length) return true;
        if (
            row < 0 || col < 0 ||
            row >= numrows || col >= nulCols ||
            word[i] !== board[row][col]
        ) { return false; }

        const char = board[row][col]
        board[row][col] = '-'

        const result =
            dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) ||
            dfs(row + 1, col, i + 1) ||
            dfs(row, col - 1, i + 1);

        board[row][col] = char
        return result;
    }
    for (let row = 0; row < numrows; row++) {
        for (let col = 0; col < nulCols; col++) {
            if (dfs(row, col, 0)) return true;
        }
    }
    return false;
};
