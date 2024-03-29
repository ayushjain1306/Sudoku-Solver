let dataArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0 ]];

function handleInputChange(i, j){
    const input = document.getElementById(`input-${i}-${j}`);

    dataArray[i][j] = input.value-'0';
}

function handleReset(){
    const input = document.querySelectorAll(".digit-input");

    input.forEach(input => {
        input.value = "";
    })

    for (let i = 0; i< 9; i++){
        for (let j=0; j< 9; j++){
            dataArray[i][j] = 0;
        }
    }
}

function isValidData(){
    let set = new Set();

    for (let i =0; i< 9; i++){
        set.clear();

        for (let j =0; j< 9; j++){
            if (set.has(dataArray[i][j]) && dataArray[i][j] != 0){
                alert("Same digit cannot be present multiple times in the same row.");
                return false;
            }
            set.add(dataArray[i][j]);
        }
    }

    for (let j =0; j< 9; j++){
        set.clear();

        for (let i =0; i< 9; i++){
            if (set.has(dataArray[i][j]) && dataArray[i][j] != 0){
                alert("Same digit cannot be present multiple times in the same column.");
                return false;
            }

            set.add(dataArray[i][j]);
        }
    }

    return true;
}

function handleSubmit(){
    const valid = isValidData();

    if (!valid){
        return;
    }

    const result = solveTheSudoku(dataArray);

    if (result == false){
        alert("No solution exists for the given matrix.");
        return;
    }

    const inputs = document.querySelectorAll(".digit-input");

    let i = 0;
    let j = 0;

    inputs.forEach(input => {
        input.value = result[i][j];

        if (j == 8){
            i++;
            j=0;
        }
        else {
            j++;
        }
    })
}