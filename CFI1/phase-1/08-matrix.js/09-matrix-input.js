import rs from 'readline-sync';




// [[1,2,3],[4,2,3],[9,0,4]];

// matrix[1][2]

export default function inputMatrix(){
    const rows = rs.questionInt('Enter the no. of rows: ');
    const cols = rs.questionInt('Enter the no. of cols: ');
    
    const matrix = new Array(rows);
    
    // console.log(matrix);
    
    for(let i = 0; i<matrix.length;i++){
        matrix[i] = new Array(cols);
    }
    
    console.log(matrix);
    
    
    for(let i = 0; i<rows;i++){
        for(let j =0; j<cols;j++){
            matrix[i][j] = rs.questionInt(`Enter the values at Row ${i+1} and Col ${j+1}: `);
        }
    }
    
    // console.log(matrix);
    return matrix;
}