function solveTheSudoku(grid){
    if (sudokuSolver(grid, 0, 0)){
        return grid;
    }

    return false;
}

function sudokuSolver(grid, row, column) {
    if (row == 9){
        return true;
    }

    let nrow = 0;
    let ncolumn = 0;

    if (column == 8){
        ncolumn = 0;
        nrow = row + 1;
    }
    else {
        ncolumn = column + 1;
        nrow = row;
    }

    if (grid[row][column] != 0){
        return sudokuSolver(grid, nrow, ncolumn);
    }

    for (let i =1; i<= 9; i++){
        if (isValid(grid, row, column, i)){
            grid[row][column] = i;

            if (sudokuSolver(grid, nrow, ncolumn)){
                return true;
            }

            grid[row][column] = 0;
        }
    }

    return false;
}

function isValid(grid, row, column, i){
    for (let a = 0; a< grid.length; a++){
        if (grid[a][column] === i) return false; 
    }

    for (let b = 0; b< 9; b++){
        if (grid[row][b] === i) return false;
    }

    let r = Math.floor(row/3)*3;
    let c = Math.floor(column/3)*3;

    for (let a = r; a< r+3; a++){
        for (let b = c; b< c+3; b++){
            if (grid[a][b] === i){
                return false;
            }
        }
    }

    return true;
}