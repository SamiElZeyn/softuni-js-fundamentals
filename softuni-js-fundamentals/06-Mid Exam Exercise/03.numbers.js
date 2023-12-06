function numbers (arr) {

    let nums = arr.split(" ").map(Number);
    let sum = nums.reduce((acc, cur) => acc + cur);
    let average = sum / nums.length;
    let greaterNums = [];
    
    for (let num of nums) {
        if (num > average) {
            greaterNums.push(num);
        }
    }
    let topFive = greaterNums.sort((a, b) => b -a).slice(0, 5);

    if (greaterNums.length > 0) {
        console.log(topFive.join(" "));;
    } else {
        console.log('No');
    }
    
} 
numbers ('10 20 30 40 50')