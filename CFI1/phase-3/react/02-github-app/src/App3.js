/**
 * 
 * 10 x 10 Table in React Elements 1...100
 * 
 * 
 */

let tableData = new Array(10);
for(let i = 0; i<tableData.length;i++){
    tableData[i] = new Array(10);
}

console.log(tableData);

let index = 1;
for(let i = 0; i<tableData.length;i++){
    for(let j = 0; j < tableData[i].length; j++){
        tableData[i][j] = index++;
    }
}



function App3(){
    return(
        <>
            <center>
                <h1>10x10 Table</h1>

                <table>
                    <tbdoy>
                        {tableData.map((row,index)=>(
                            <tr key={index}>
                                {row.map((col, j) => (
                                    <td key={j}>{col}</td>
                                ))}
                            </tr>
                        ))}
                    </tbdoy>
                </table>
            </center>

        </>
    )
}

export default App3;