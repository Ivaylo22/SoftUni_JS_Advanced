function solve(matrix){
    for (let i = 0; i < matrix[i].length - 2; i ++){
        let firstRow = matrix[i].reduce((acc, el) => acc + el);
        let secondRow = matrix[i+1].reduce((acc,el) => acc + el);

        if (firstRow !== secondRow){
            return false;
        }

        let firstCol = 0;
        let secondCol = 0;
        for(let col = 0; col < matrix.length ; col ++){
            firstCol += matrix[col][i];
            secondCol += matrix[col][i + 1];
        }

        if(firstCol !== secondCol || firstCol !== firstRow){
            return false;
        }
    }
    return true;
}

console.log(
    solve([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]
       
       
       )
    )