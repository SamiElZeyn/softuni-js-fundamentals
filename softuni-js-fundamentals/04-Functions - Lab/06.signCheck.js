function solve (num1, num2, num3){

    let arr = [num1, num2, num3];
    let isPositive = true;
    let negative = 0;
    let positive = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negative++;
        } else {
            positive++;
        }
    }

    if (positive === 3 || positive === 1){
        console.log('Positive');
    } else {
        console.log('Negative');
    }

}
solve (-6,
    -12,
    14
)