function createTable() {
    var table = "<table id='table'>";

    for (let i = 0; i< 9; i++){
        let name = "row1";

        if ((i+1)%3 == 0){
            name = "row2"
        }

        let row = `<tr class='${name}'>`;

        for (let j =0; j< 9; j++){
            let colName = "col1";

            if ((j+1)%3 == 0){
                colName = "col2";
            }

            row += `<td class='${colName}'><input class='digit-input' id='input-${i}-${j}' type='text' min='1' max='9' onchange='handleInputChange(${i}, ${j})'></td>`;
        }

        table += row;
        
    }

    return table;
}

const container = document.getElementById("table-section");

container.innerHTML = createTable();

const footer = document.getElementById('copyright');

const copyrightSymbol = '\u00A9';

footer.innerText = `${copyrightSymbol} Copyright | Created By Ayush Jain.`;