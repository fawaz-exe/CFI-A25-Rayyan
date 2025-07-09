import readlineSync from 'readline-sync';

function matrixInput(){
    // Size of the Array
    console.log('Enter rows and columns: ');
    const rows = readlineSync.questionInt("Enter rows: ");
    const cols = readlineSync.questionInt("Enter cols: ");

    const matrix = new Array(rows);
    for(let i = 0; i<matrix.length;i++){
        matrix[i] = new Array(cols);
    }

    console.log(matrix);

    for(let i =0 ;i<matrix.length;i++){
        for(let j = 0; j<matrix[i].length;j++){
            matrix[i][j] = readlineSync.questionInt(`Enter the elements in Matrix where row ${i+1} and column ${j+1}: `);
        }
    }
    // console.log(matrix);
    return matrix;
}   

// matrixInput();

export default matrixInput;