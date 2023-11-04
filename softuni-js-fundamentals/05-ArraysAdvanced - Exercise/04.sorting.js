function sorting (arr){

    let sortedNums = arr.sort((a, b) => a - b);
    let correctOrder = [];

    while (sortedNums.length > 0){
        let maxNum = sortedNums.pop();
        let minNum = sortedNums.shift();

        correctOrder.push(maxNum);
        correctOrder.push(minNum);
    }
    console.log(correctOrder.join(' '));
}
sorting ()