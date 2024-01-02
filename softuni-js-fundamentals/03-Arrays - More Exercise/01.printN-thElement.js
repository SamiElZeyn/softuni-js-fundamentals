function print (arr) {

    let lastElement = Number(arr.pop())
    let result = [];
   
    for (i = 0; i < arr.length; i+= lastElement) {

        let curEl = arr[i];
        result.push(curEl)

    }
    console.log(result.join(" "));
}
print (['5', '20', '31', '4', '20', '2'])