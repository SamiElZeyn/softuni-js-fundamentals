function solve (arr){

    let newArr = [];

    for (let i = 0; i < arr.length; i++){

        let isMax = true;

        for (j = i + 1; j < arr.length; j++){

            if (arr[i] <= arr[j]){
                isMax = false;
                break;
            }
        }
        if (isMax){
            newArr.push(arr[i]);
        }
        
    }

    console.log(newArr.join(" "));
}
solve ([14, 24, 3, 19, 15, 17])
solve ([41, 41, 34, 20]) 
solve ([27, 19, 42, 2, 13, 45, 48]) 

