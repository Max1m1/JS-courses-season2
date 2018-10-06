// Task № 3

let firstArray = [1, 3, 6, 8, 4];
let secondArray = [7, 9, 8, 1, 3];

function difference(arg1, arg2) {
    let resArray = [];
    let indexArray = null;

    for (indexArray in firstArray) {
        if (arg2.indexOf(arg1[indexArray]) === -1) {
            resArray.push(arg1[indexArray]);
        }
    }

    console.log(resArray);
}

difference(firstArray, secondArray);
