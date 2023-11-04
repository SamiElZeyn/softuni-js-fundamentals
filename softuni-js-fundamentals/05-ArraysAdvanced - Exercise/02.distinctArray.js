function solve (nums){

    let uniqueNums = [];

    for (let el of nums){
        if(!uniqueNums.includes(el)){
            uniqueNums.push(el)
        }
    }
    console.log(uniqueNums.join(" "));
}
solve ()