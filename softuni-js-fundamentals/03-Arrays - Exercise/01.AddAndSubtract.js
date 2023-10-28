function solve (arr){

    let originalSum = 0;
    let newSum = 0;

    for (i = 0; i < arr.length; i++){

        originalSum += arr[i];
        if (arr[i] % 2 === 0){
            arr[i] = arr[i] + i;
        } else {
            arr[i] = arr[i] - i;
        }
        newSum += arr[i];
    }

    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}
solve ([5, 15, 23, 56, 35])