function solve (arr, rotations){

    for (let i = 0; i < rotations; i++) {
        
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(" "));
}
solve ([32, 21, 61, 1], 4)