// Завдання № 3

let firstArray = [1, 3, 6, 8, 4];
let secondArray = [7, 9, 8, 1, 3];

function dataSelection(data1, data2) {
    let resArray = [];
    let indexArray = null;

    for (indexArray in firstArray) {
        if (data2.indexOf(data1[indexArray]) === -1) {
            resArray.push(data1[indexArray]);
        }
    }

    console.log(resArray);
}

dataSelection(firstArray, secondArray);
