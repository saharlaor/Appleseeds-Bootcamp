function validSolution(board) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let isValid = true;
    numbers.forEach((i) => {
        isValid = checkRow(board, i);
        isValid = checkCol(board, i);
        isValid = checkBlock(board, i);
    });
    return isValid;
}

function checkRow(board, index) {
    for (let i = 1; i <= 9; i++) {
        if (board[index - 1].filter((val) => val === i).length !== 1) {
            return false;
        }
    }
    return true;
}

function checkCol(board, index) {
    let col = board.map((row) => row[index - 1]);
    for (let i = 1; i <= 9; i++) {
        if (col.filter((val) => val === i).length !== 1) {
            return false;
        }
    }
    return true;
}

function checkBlock(board, index) {
    let block = board
        .slice(
            (Math.ceil(index / 3) - 1) * 3,
            (Math.ceil(index / 3) - 1) * 3 + 3
        )
        .map((row) =>
            row.slice(((index - 1) % 3) * 3, ((index - 1) % 3) * 3 + 3)
        );
    let valArr = block.reduce((arr, curr) => {
        curr.forEach((val) => arr.push(val));
        return arr;
    }, []);
    for (let i = 1; i <= 9; i++) {
        if (valArr.filter((val) => val === i).length !== 1) {
            return false;
        }
    }
    return true;
}

console.log(
    validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ])
);
