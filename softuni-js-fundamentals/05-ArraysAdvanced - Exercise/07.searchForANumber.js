function solve (arr1, arr2){

    let num1 = arr2[0];
    let num2 = arr2[1];
    let num3 = arr2[2];

    let newArr = arr1.slice(0, num1);
    newArr.splice(0, num2);

    let num3Count = 0;

    for (let el of newArr){
        if (el === num3){
            num3Count++;
        }
    }

    console.log(`Number ${num3} occurs ${num3Count} times.`);

}
solve ([7, 1, 5, 8, 2, 7],
    [3, 1, 5])