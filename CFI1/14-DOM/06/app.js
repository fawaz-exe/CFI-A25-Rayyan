const SpreadsheetContainer = document.querySelector('#spreadsheet-container')

const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

class cell{
    constructor(isHeader,disabled,data,row,column,rowname,columnname,active = false){
        this.isHeader = isHeader
        this.disabled = disabled
        this.data = data
        this.row = row
        this.column = column
        this.rowname = rowname
        this.columnname = columnname
        this.active = active
    }
}

function CreatecellElement(cell){
    const cellELement = document.createElement('Element')
    cellELement.className = 'cell';
    cellELement.id = 'cell_'+ cell.row + cell.column;
    cellELement.value = cell.data;
    cellELement.Disabled = cell.disabled;

    cellELement.onchange((e)=>handleOnchange(e.target.value, cell));
}
function handleOnchange(data,cell){

}