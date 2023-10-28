function solve (arr){
    let newArr = [];

    for (i = 0; i < arr.length; i++){
        if (Number(arr[i]) < 0){
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join("\n"));
}
solve (['7', '-2', '8', '9'])